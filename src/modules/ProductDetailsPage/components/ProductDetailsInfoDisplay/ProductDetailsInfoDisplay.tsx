import styles from './ProductDetailsInfoDisplay.module.scss';
import { useContext } from 'react';
import { ProductDetailsContext } from 'store/ProductDetailsContext';

export const ProductDetailsInfoDisplay = () => {
  const { product } = useContext(ProductDetailsContext);

  if (!product) {
    return;
  }

  return (
    <div className={styles.container}>
      {product.screen && (
        <div className={styles.container__info}>
          <span className={styles.container__info__title}>Screen</span>
          <span className={styles.container__info__value}>
            {product.screen}
          </span>
        </div>
      )}
      {product.resolution && (
        <div className={styles.container__info}>
          <span className={styles.container__info__title}>Resolution</span>
          <span className={styles.container__info__value}>
            {product.resolution}
          </span>
        </div>
      )}
      {product.processor && (
        <div className={styles.container__info}>
          <span className={styles.container__info__title}>Processor</span>
          <span className={styles.container__info__value}>
            {product.processor}
          </span>
        </div>
      )}
      {product.ram && (
        <div className={styles.container__info}>
          <span className={styles.container__info__title}>RAM</span>
          <span className={styles.container__info__value}>{product.ram}</span>
        </div>
      )}
    </div>
  );
};
