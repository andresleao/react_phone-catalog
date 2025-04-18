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
  const { type, id } = useParams();
  const { products } = useContext(ProductsContext);

  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [models, setModels] = useState<string[]>([]);
  const [availableColors, setAvailableColors] = useState<ColorName[]>([]);
  const [imageList, setImageList] = useState<{ id: string; src: string }[]>([]);

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';
  const navigate = useNavigate();

  function normalizeName(name: string) {
    return name
      .toLowerCase()
      .replace(/[()]/g, '') // remove parênteses
      .replace(/[^a-z0-9\-]/g, '-') // substitui tudo que não é letra, número ou hífen por hífen
      .replace(/-+/g, '-') // evita múltiplos hífens seguidos
      .replace(/^-|-$/g, ''); // remove hífen do começo ou fim
  }

  const findMatchingModel = useCallback(
    (name: string, modelsList: string[]) => {
      const normalizedName = normalizeName(name);

      const sortedModels = [...modelsList].sort((a, b) => b.length - a.length);

      return sortedModels.find(model =>
        normalizedName.includes(normalizeName(model)),
      );
    },
    [],
  );

  const fetchModels = useCallback(async () => {
    try {
      const response = await fetch(`${API_URL}/api/product-model/${type}`);

      if (!response.ok) {
        throw new Error('Request error');
      }

      const data: string[] = await response.json();
      const modelsName = data.map(m => m.toLocaleLowerCase());

      setModels(modelsName);
    } catch (error) {
      console.error('Error fetching brands', error);
    }
  }, [API_URL, type]);

  const fetchColors = useCallback(
    async (productName: string) => {
      try {
        const parts = productName.split(' ');

        const name = parts.slice(0, 6).join('-').toLowerCase();
        const model = findMatchingModel(name, models);

        const response = await fetch(
          `${API_URL}/api/product-colors/${type}/${model}`,
        );

        if (!response.ok) {
          throw new Error(`HTTP Error ${response.status}`);
        }

        const directories = await response.json();

        const validColors = directories
          .map((dir: string) => dir.toLowerCase())
          .filter((dir: string): dir is ColorName => dir in COLOR_MAP);

        setAvailableColors(validColors.length ? validColors : []);
      } catch (error) {
        console.error('Error fetching colors:', error);
        setAvailableColors([]);
      }
    },
    [API_URL, type, findMatchingModel, models],
  );

  const fetchImages = useCallback(
    async (productName: string) => {
      const parts = productName.split(' ');
      let color = parts[parts.length - 1].toLowerCase();

      const colorText =
        `${parts[parts.length - 2]}-${parts[parts.length - 1]}`.toLowerCase();

      console.log(colorText);

      if (Object.keys(COLOR_MAP).includes(colorText.replace('-', ''))) {
        color = colorText.replace('-', '');
      }

      if (Object.keys(COLOR_MAP).includes(colorText)) {
        color = colorText;
      }

      if (color === 'gray') {
        color = 'spacegray';
      }

      if (type === 'accessories' && color === 'spacegray') {
        color = 'space-gray';
      }

      const name = parts.slice(0, 6).join('-').toLowerCase();
      const model = findMatchingModel(name, models);

      if (!model) {
        return;
      }

      try {
        const response = await fetch(
          `${API_URL}/api/product-images/${type}/${model}/${color}`,
        );

        if (!response.ok) {
          const errorText = await response.text();

          throw new Error(`HTTP Error ${response.status}: ${errorText}`);
        }

        const data: string[] = await response.json();

        const images = data.map((fileName: string) => ({
          id: fileName.split('.')[0],
          src: `/img/${type}/${model.toLowerCase()}/${color}/${fileName}`,
        }));

        setImageList(images);
      } catch (error) {
        console.error('Error searching for images:', error);
      }
    },
    [type, API_URL, models, findMatchingModel],
  );

  useEffect(() => {
    fetchModels();
  }, [fetchModels]);

  useEffect(() => {
    const loadData = async () => {
      if (!id || models.length === 0) {
        return;
      }

      setIsLoading(true);
      try {
        const data = await getProductDetails(id);

        setProduct(data);

        await fetchColors(data.name);
        await fetchImages(data.name);
      } catch (error) {
        console.error('Error loading product details:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, [id, models, fetchColors, fetchImages]);

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
        <ImagesDisplay
          imageUrl={product!.image}
          productName={product!.name}
          images={imageList}
        />
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
