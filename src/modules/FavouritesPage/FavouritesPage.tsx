/* eslint-disable no-console */

import { AppSpinner } from 'components/AppSpinner';
import styles from './Favourites.module.scss';
import { NavHistory } from 'components/NavHistory';
import { ProductCard } from 'components/ProductCard';
import { getFavouritesProducts } from 'datasources/productsDatasource';
import { useEffect, useState } from 'react';
import { Product } from 'types/Product';
import { getFavorites } from 'utils/appLocalStorage';
import { EmptyContent } from 'components/EmptyContent';

export const FavouritesPage = () => {
  const [favourites, setFavourites] = useState<Product[] | null>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleGetFavouritesProducts = async () => {
    setIsLoading(true);

    try {
      const ids = getFavorites();
      const data = await getFavouritesProducts(ids);

      if (data) {
        setFavourites(data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleGetFavouritesProducts();
  }, []);

  if (isLoading) {
    return <AppSpinner />;
  }

  if (!isLoading && !favourites) {
    return <p>Error fetching favourites list</p>;
  }

  if (!isLoading && favourites?.length === 0) {
    return (
      <EmptyContent title={'You do not have favourites products yet...'} />
    );
  }

  return (
    <div className={styles.container}>
      <NavHistory />
      <span className={styles.container__title}>Favourites</span>
      <span className={styles.container__lenght}>5 items</span>
      <div className={styles.container__grid}>
        {favourites!.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
