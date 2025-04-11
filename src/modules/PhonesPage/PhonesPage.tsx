import { NavHistory } from '../../components/NavHistory';
import { ProductCard } from '../../components/ProductCard';
import styles from './PhonesPage.module.scss';

export const PhonesPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.container__content__history}>
          <NavHistory />
        </div>
        <div className={styles.container__content__info}>
          <span className={styles.container__content__title}>PhonesPage</span>
          <span className={styles.container__content__list_lenght}>
            95 models
          </span>
        </div>
        <div className={styles.container__content__list}>
          {[...Array(14)].map((_, index) => (
            <ProductCard key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
