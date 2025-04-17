/* eslint-disable no-console */

import styles from './ProductDetails.module.scss';
import { FiChevronLeft } from 'react-icons/fi';
import { useNavigate, useParams } from 'react-router-dom';
import { IconTextButton } from 'components/IconTextButton';
import { NavHistory } from 'components/NavHistory';
import { CustomSection } from 'components/CustomSection';
import { ImagesDisplay } from './components/ImagesDisplay';
import { CustomSelectorsArea } from './components/CustomSelectorsArea';
import { AboutArea } from './components/AboutArea';
import { TechSpecsArea } from './components/TechSpecsArea';
import { useCallback, useContext, useEffect, useState } from 'react';
import { ProductsContext } from 'store/ProductsContext';
import { getProductDetails } from 'datasources/productsDatasource';
import { Product } from 'types/Product';
import { AppSpinner } from 'components/AppSpinner';
import { COLOR_MAP, ColorName } from 'types/ProductColors';

export const ProductDetailsPage = () => {
  const { products } = useContext(ProductsContext);

  const navigate = useNavigate();
  const { type, id } = useParams();

  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [availableColors, setAvailableColors] = useState<ColorName[]>([]);

  // const isValidColor = (color: string): color is ColorName => {
  //   return color in COLOR_MAP;
  // };

  const fetchColors = useCallback(async (productName: string) => {
    try {
      const parts = productName.split(' ');
      const productKey = `${parts[0].toLowerCase()}-${parts[1].toLowerCase()}-${parts[2].toLowerCase()}`;

      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

      const response = await fetch(
        `${API_URL}/api/diretorios/phones/${productKey}`,
        {
          signal: AbortSignal.timeout(5000), // Timeout de 5 segundos
        },
      );

      if (!response.ok) {
        throw new Error(`Erro HTTP ${response.status}`);
      }

      const directories = await response.json();

      const validColors = directories
        .map((dir: string) => dir.toLowerCase())
        .filter((dir: string): dir is ColorName => dir in COLOR_MAP);

      setAvailableColors(validColors.length ? validColors : ['black']);
    } catch (error) {
      console.error('Erro na conexão:', error);
      setAvailableColors(['black']); // Fallback
      // Adicione feedback visual para o usuário
    }
  }, []);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        if (!id) {
          return;
        }

        const data = await getProductDetails(id);

        if (!data) {
          return;
        }

        setProduct(data);
        await fetchColors(data.name); // Garante a ordem de execução
      } catch (error) {
        console.error('Loading failed:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, [id, fetchColors]);

  if (isLoading) {
    return <AppSpinner />;
  }

  if (!isLoading && !product) {
    return <p>Error fetching product details</p>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.container__nav}>
        <NavHistory productName={product?.name} />
        <IconTextButton
          label={'Back'}
          icon={<FiChevronLeft size={14} />}
          onClick={() => navigate(`/${type}`)}
        />
      </div>
      <span className={styles.container__title}>{product?.name}</span>

      <div className={styles.container__grid}>
        <ImagesDisplay imageUrl={product!.image} productName={product!.name} />
        <CustomSelectorsArea
          product={product!}
          availableColors={availableColors}
        />
      </div>

      <div className={styles.container__grid__info}>
        <AboutArea />
        <TechSpecsArea />
      </div>

      {!!products && (
        <div className={styles.container__list}>
          <CustomSection
            title={'You may also like'}
            products={products.slice(0, 4)}
          />
        </div>
      )}
    </div>
  );
};
