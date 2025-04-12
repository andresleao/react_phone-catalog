import { ProductCard } from '../../../../components/ProductCard';
import { PageSelector } from '../PageSelector';
import styles from './ProductsList.module.scss';

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
