/* eslint-disable no-console */

import { useEffect, useContext, useState, useCallback } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { ProductsContext } from 'store/ProductsContext';
import { getProducts } from 'datasources/productsDatasource';
import { AppSelect } from 'components/AppSelect';
import { NavHistory } from 'components/NavHistory';
import { AppSpinner } from 'components/AppSpinner';
import { SortByFilter } from 'types/SortByFilter';
import styles from './ProductsContent.module.scss';
import { ProductsList } from '../ProdcutsList';

export const ProductsContent = () => {
  const { setProducts, setFilteredProducts, filteredProducts, products } =
    useContext(ProductsContext);

  const { type } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
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

  const handleItemsPerPageChange = (value: string) => {
    setPageItems(value);
    setCurrentPage(1);
  };

  const handleGetProducts = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await getProducts();

      setProducts(data);

      const dataByType = data.filter(product => product.category === type);

      setFilteredProducts([...dataByType]);
    } catch (error) {
      console.error('Fetch error:', error);
    } finally {
      setIsLoading(false);
    }
  }, [setProducts, setFilteredProducts, type]);

  useEffect(() => {
    handleGetProducts();
  }, [handleGetProducts]);

  useEffect(() => {
    const sort = searchParams.get('sort');
    const page = searchParams.get('page');
    const perPage = searchParams.get('perPage');

    const sortFilterMap: Record<string, string> = {
      Newest: 'age',
      Alphabetically: 'title',
      Cheapest: 'price',
    };

    if (sort && Object.values(sortFilterMap).includes(sort)) {
      setSortByFilter(
        Object.keys(sortFilterMap).find(key => sortFilterMap[key] === sort) ||
          'Newest',
      );
    }

    if (perPage) {
      setPageItems(perPage);
    }

    if (page) {
      setCurrentPage(Number(page));
    }
  }, [searchParams]);

  useEffect(() => {
    const sortFilterMap: Record<string, string> = {
      Newest: 'age',
      Alphabetically: 'title',
      Cheapest: 'price',
    };

    const params: Record<string, string> = {};

    if (currentPage !== 1) {
      params.page = currentPage.toString();
    }

    if (sortByFilter !== 'Newest') {
      params.sort = sortFilterMap[sortByFilter];
    } else {
      params.sort = 'age';
    }

    if (pageItems !== 'all') {
      params.perPage = pageItems;
    }

    const finalParams = new URLSearchParams();

    if (params.sort) {
      finalParams.append('sort', params.sort);
    }

    if (params.page) {
      finalParams.append('page', params.page);
    }

    if (params.perPage) {
      finalParams.append('perPage', params.perPage);
    }

    setSearchParams(finalParams);
  }, [sortByFilter, pageItems, currentPage, setSearchParams, searchParams]);

  const getPagesTitle = () => {
    switch (type) {
      case 'phones':
        return 'Mobile phones';
      case 'tablets':
        return 'Tablets';
      case 'accessories':
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
    return <p>An error occurred</p>;
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
            onChange={e => handleItemsPerPageChange(e.target.value)}
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
