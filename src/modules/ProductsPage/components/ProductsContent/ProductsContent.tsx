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

export const ProductsContent = () => {
  const { type } = useParams();

  const { setProducts, setFilteredProducts, filteredProducts, products } =
    useContext(ProductsContext);

  const [isLoading, setIsLoading] = useState(false);

  const [sortByFilter, setSortByFilter] = useState('Newest');
  const sortByOptions = ['Newest', 'Alphabetically', 'Cheapest'];

  const itemsOnPage = ['4', '8', '16', 'all'];

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

  if (isLoading) {
    return <AppSpinner fullScreen={true} />;
  }

  if (!isLoading && (filteredProducts.length === 0 || !products)) {
    return <p>An error ocurred</p>;
  }

  const list = filteredProducts.filter(p => p.category === type);

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
            options={itemsOnPage}
            value={''}
            onChange={() => {}}
          />
        </div>
        <div className={styles.container__content__info}>
          <span className={styles.container__content__title}>
            {getPagesTitle()}
          </span>
          <span className={styles.container__content__list_lenght}>
            {`${list.length} models`}
          </span>
        </div>
        <ProductsList products={list} />
      </div>
    </div>
  );
};
