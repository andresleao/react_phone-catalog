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
      .replace(/[()]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/[^a-z0-9-]/g, '');
  }

  function findMatchingModel(name: string, modelsList: string[]) {
    const normalizedName = normalizeName(name);
    const sortedModels = [...modelsList].sort((a, b) => b.length - a.length);

    return sortedModels.find(model =>
      normalizedName.includes(model.toLowerCase()),
    );
  }

  const fetchModels = useCallback(async () => {
    try {
      const response = await fetch(`${API_URL}/api/product-model/${type}`);

      if (!response.ok) {
        throw new Error('Erro na requisição');
      }

      const data: string[] = await response.json();
      const modelsName = data.map(m => m.toLocaleLowerCase());

      setModels(modelsName);
    } catch (error) {
      console.error('Erro ao buscar modelos:', error);
    }
  }, [API_URL, type]);

  const fetchColors = useCallback(
    async (productName: string) => {
      try {
        const parts = productName.split(' ');
        let productKey = '';

        switch (type) {
          case 'phones':
            productKey = `${parts[0]}-${parts[1]}-${parts[2]}`.toLowerCase();
            break;
          case 'tablets':
            productKey =
              `${parts[0]}-${parts[1]}-${parts[2]}-${parts[3]}-${parts[4]}`
                .toLowerCase()
                .replace(/[()]/g, '');
            break;
          case 'accessories':
            productKey =
              `${parts[0]}-${parts[1]}-${parts[2]}-${parts[3]}`.toLowerCase();
            break;
          default:
            productKey = '';
        }

        const response = await fetch(
          `${API_URL}/api/product-colors/${type}/${productKey}`,
        );

        if (!response.ok) {
          throw new Error(`Erro HTTP ${response.status}`);
        }

        const directories = await response.json();

        const validColors = directories
          .map((dir: string) => dir.toLowerCase())
          .filter((dir: string): dir is ColorName => dir in COLOR_MAP);

        setAvailableColors(validColors.length ? validColors : []);
      } catch (error) {
        console.error('Erro ao buscar cores:', error);
        setAvailableColors([]);
      }
    },
    [API_URL, type],
  );

  const fetchImages = useCallback(
    async (productName: string) => {
      const parts = productName.split(' ');
      let color = parts[parts.length - 1].toLowerCase();

      const colorText =
        `${parts[parts.length - 2]}-${parts[parts.length - 1]}`.toLowerCase();

      if (Object.keys(COLOR_MAP).includes(colorText)) {
        color = colorText;
      }

      if (color === 'gray') {
        color = 'spacegray';
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

          throw new Error(`Erro HTTP ${response.status}: ${errorText}`);
        }

        const data: string[] = await response.json();

        const images = data.map((fileName: string) => ({
          id: fileName.split('.')[0],
          src: `/img/${type}/${model.toLowerCase()}/${color}/${fileName}`,
        }));

        setImageList(images);
      } catch (error) {
        console.error('Erro ao buscar imagens:', error);
      }
    },
    [type, API_URL, models],
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
        console.error('Erro ao carregar detalhes do produto:', error);
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
