import styles from './ProductsList.module.scss';
import { ProductCard } from 'components/ProductCard';
import { PageSelector } from '../PageSelector';
import { useContext } from 'react';
import { ProductsContext } from 'store/ProductsContext';

export const ProductsList = () => {
  const { products } = useContext(ProductsContext);

  if (!products) {
    return;
  }

  return (
    <>
      <div className={styles.container}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <PageSelector />
    </>
  );
};
