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
  const { setProducts } = useContext(ProductsContext);
  const [isLoading, setIsLoading] = useState(false);

  const handleGetProducts = useCallback(async () => {
    setIsLoading(true);

    try {
      const data = await getProducts();

      setProducts(data);
    } catch (error) {
      console.error('Fetch error:', error);
    } finally {
      setIsLoading(false);
    }
  }, [setProducts]);

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

  const sortBy = ['Newest', 'Alphabetically', 'Cheapest'];
  const itemsOnPage = ['4', '8', '16', 'all'];

  if (isLoading) {
    return <AppSpinner fullScreen={true} />;
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
            options={sortBy}
          />
          <AppSelect
            id={'itemsOnPage'}
            label={'Items on page'}
            width={'88px'}
            options={itemsOnPage}
          />
        </div>
        <div className={styles.container__content__info}>
          <span className={styles.container__content__title}>
            {getPagesTitle()}
          </span>
          <span className={styles.container__content__list_lenght}>
            95 models
          </span>
        </div>
        <ProductsList />
      </div>
    </div>
  );
};
