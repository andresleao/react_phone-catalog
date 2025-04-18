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
import { useContext, useEffect, useState } from 'react';
import { ProductsContext } from 'store/ProductsContext';
import { Category, getProductDetails } from 'datasources/productsDatasource';
import { AppSpinner } from 'components/AppSpinner';
import { COLOR_MAP, ColorName } from 'types/ProductColors';
import { ProductDetails } from 'types/ProductDetailsPage';

export const ProductDetailsPage = () => {
  const { type, id } = useParams();
  const { products } = useContext(ProductsContext);

  const [product, setProduct] = useState<ProductDetails | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [availableColors, setAvailableColors] = useState<ColorName[]>([]);
  const [imageList, setImageList] = useState<string[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    const loadData = async () => {
      if (!id) {
        return;
      }

      try {
        setIsLoading(true);
        const data = await getProductDetails(id, type as Category);

        const validColors = data.colorsAvailable
          .map((color: string) => color.toLowerCase())
          .filter((color: string): color is ColorName => color in COLOR_MAP);

        setProduct(data);
        setImageList(data.images);
        setAvailableColors(validColors);
      } catch (error) {
        console.error('Error loading product details:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, [id, type]);

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
          label="Back"
          icon={<FiChevronLeft size={14} />}
          onClick={() => navigate(`/${type}`)}
        />
      </div>

      <span className={styles.container__title}>{product?.name}</span>

      <div className={styles.container__grid}>
        <ImagesDisplay images={imageList} />
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
            title="You may also like"
            products={products.slice(0, 4)}
          />
        </div>
      )}
    </div>
  );
};
