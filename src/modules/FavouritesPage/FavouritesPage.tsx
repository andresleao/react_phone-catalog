import styles from './Favourites.module.scss';
import { NavHistory } from 'components/NavHistory';
import { ProductCard } from 'components/ProductCard';

export const FavouritesPage = () => {
  return (
    <div className={styles.container}>
      <NavHistory />
      <span className={styles.container__title}>Favourites</span>
      <span className={styles.container__lenght}>5 items</span>
      <div className={styles.container__grid}>
        {[...Array(5)].map((_, index) => (
          <ProductCard key={index} />
        ))}
      </div>
    </div>
  );
};
