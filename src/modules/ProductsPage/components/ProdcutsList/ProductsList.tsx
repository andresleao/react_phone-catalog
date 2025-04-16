import styles from './ProductsList.module.scss';
import { ProductCard } from 'components/ProductCard';
import { PageSelector } from '../PageSelector';
import { Product } from 'types/Product';

type ProductsListProps = {
  products: Product[];
};

export const ProductsList = ({ products }: ProductsListProps) => {
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
