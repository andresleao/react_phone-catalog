/* eslint-disable no-console */

import styles from './ProductsContent.module.scss';
import { useParams } from 'react-router-dom';
import { AppSelect } from 'components/AppSelect';
import { NavHistory } from 'components/NavHistory';
import { AppPathRoute } from 'types/AppPathRoute';
import { useCallback, useContext, useEffect, useState } from 'react';
import { ProductsContext } from 'store/ProductsContext';
import { getProducts } from 'datasources/productsDatasource';
import { ProductsList } from '../ProdcutsList';
import { AppSpinner } from 'components/AppSpinner';
import { SortByFilter } from 'types/SortByFilter';

export const ProductsContent = () => {
  const { type } = useParams();

  const { setProducts, setFilteredProducts, filteredProducts, products } =
    useContext(ProductsContext);

  const [isLoading, setIsLoading] = useState(false);

  const [sortByFilter, setSortByFilter] = useState('Newest');
  const [pageItems, setPageItems] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  const sortByOptions: SortByFilter[] = [
    'Newest',
    'Alphabetically',
    'Cheapest',
  ];

  const pageItemsOptions = ['4', '8', '16', 'all'];

  const handleSortChange = (value: string) => {
    setSortByFilter(value);

    const sortedProducts = [...filteredProducts];

    switch (value) {
      case 'Newest':
        sortedProducts.sort((a, b) => b.year - a.year);
        break;
      case 'Alphabetically':
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'Cheapest':
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      default:
        break;
    }

    setFilteredProducts(sortedProducts);
  };

  const handlePageItemsChange = (value: string) => {
    setPageItems(value);
    setCurrentPage(1);
  };

  const handleGetProducts = useCallback(async () => {
    setIsLoading(true);

    try {
      const data = await getProducts();

      setProducts(data);
      setFilteredProducts([...data]);
    } catch (error) {
      console.error('Fetch error:', error);
    } finally {
      setIsLoading(false);
    }
  }, [setProducts, setFilteredProducts]);

  useEffect(() => {
    handleGetProducts();
  }, [handleGetProducts]);

  useEffect(() => {
    if (!products) {
      return;
    }

    let result = [...products];

    if (type) {
      result = result.filter(p => p.category === type);
    }

    switch (sortByFilter) {
      case 'Newest':
        result.sort((a, b) => b.year - a.year);
        break;
      case 'Alphabetically':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'Cheapest':
        result.sort((a, b) => a.price - b.price);
        break;
      default:
        break;
    }

    setFilteredProducts(result);
    setCurrentPage(1);
  }, [products, type, sortByFilter, setFilteredProducts]);

  const getPagesTitle = () => {
    switch (type) {
      case AppPathRoute.Phones:
        return 'Mobile phones';
      case AppPathRoute.Tablets:
        return 'Tablets';
      case AppPathRoute.Accessories:
        return 'Accessories';
      default:
        return '';
    }
  };

  const getPerPageValue = () => {
    if (pageItems === 'all') {
      return filteredProducts.length;
    }

    return parseInt(pageItems, 10);
  };

  if (isLoading) {
    return <AppSpinner fullScreen={true} />;
  }

  if (!isLoading && (filteredProducts.length === 0 || !products)) {
    return <p>An error ocurred</p>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.container__content__history}>
          <NavHistory />
        </div>
        <div className={styles.container__content__selects}>
          <AppSelect
            id={'sortBy'}
            label={'Sort by'}
            width={'176px'}
            value={sortByFilter}
            options={sortByOptions}
            onChange={e => handleSortChange(e.target.value)}
          />
          <AppSelect
            id={'itemsOnPage'}
            label={'Items on page'}
            width={'88px'}
            options={pageItemsOptions}
            value={pageItems}
            onChange={e => handlePageItemsChange(e.target.value)}
          />
        </div>
        <div className={styles.container__content__info}>
          <span className={styles.container__content__title}>
            {getPagesTitle()}
          </span>
          <span className={styles.container__content__list_lenght}>
            {`${filteredProducts.length} models`}
          </span>
        </div>
        <ProductsList
          products={filteredProducts}
          perPage={getPerPageValue()}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};
