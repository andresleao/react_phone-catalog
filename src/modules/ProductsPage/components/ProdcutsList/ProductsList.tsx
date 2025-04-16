import styles from './ProductsList.module.scss';
import { ProductCard } from 'components/ProductCard';
import { PageSelector } from '../PageSelector';
import { Product } from 'types/Product';
import { useMemo } from 'react';

type ProductsListProps = {
  products: Product[];
  perPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

export const ProductsList = ({
  products,
  perPage,
  currentPage,
  onPageChange,
}: ProductsListProps) => {
  const indexOfLastItem = currentPage * perPage;
  const indexOfFirstItem = indexOfLastItem - perPage;

  const currentItems = useMemo(() => {
    return products.slice(indexOfFirstItem, indexOfLastItem);
  }, [products, indexOfFirstItem, indexOfLastItem]);

  return (
    <>
      <div className={styles.container}>
        {currentItems.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <PageSelector
        listSize={products.length}
        perPage={perPage}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </>
  );
};
