import styles from './ProductsList.module.scss';
import { ProductCard } from 'components/ProductCard';
import { PageSelector } from '../PageSelector';

export const ProductsList = () => {
  return (
    <>
      <div className={styles.container}>
        {[...Array(14)].map((_, index) => (
          <ProductCard key={index} />
        ))}
      </div>
      <PageSelector />
    </>
  );
};
