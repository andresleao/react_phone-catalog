/* eslint-disable no-console */

import styles from './HomePage.module.scss';
import { Carousel } from 'components/Carousel';
import { CustomSection } from 'components/CustomSection';
import { CategoriesSection } from './components/CategoriesSection';
import { useCallback, useContext, useEffect, useState } from 'react';
import { ProductsContext } from 'store/ProductsContext';
import { getProducts } from 'datasources/productsDatasource';
import { AppSpinner } from 'components/AppSpinner';

export const HomePage = () => {
  const { setProducts, setFilteredProducts, products, filteredProducts } =
    useContext(ProductsContext);

  const [isLoading, setIsLoading] = useState(false);

  const handleGetProducts = useCallback(async () => {
    setIsLoading(true);

    try {
      const data = await getProducts();

      setProducts(data);
      setFilteredProducts([...data]);
    } catch (error) {
      console.error('Fetch error:', error);
    } finally {
      setIsLoading(false);
    }
  }, [setProducts, setFilteredProducts]);

  useEffect(() => {
    handleGetProducts();
  }, [handleGetProducts]);

  if (isLoading) {
    return <AppSpinner fullScreen={true} />;
  }

  if (!isLoading && (filteredProducts.length === 0 || !products)) {
    return <p>An error ocurred</p>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.container__intro}>
        <h1>Welcome to Nice Gadgets store!</h1>
        <Carousel />
      </div>
      <CustomSection
        title={'Brand new models'}
        products={products!.slice(0, 4)}
      />
      <CategoriesSection />
      <CustomSection title={'Hot prices'} products={products!.slice(0, 4)} />
    </div>
  );
};
