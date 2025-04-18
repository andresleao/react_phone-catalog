import styles from './CustomSelectorsArea.module.scss';
import { useMediaQuery } from 'react-responsive';
import { FiHeart } from 'react-icons/fi';
import { ProductInfoDisplay } from 'components/ProductInfoDisplay';
import { IconButton } from 'components/IconButton';
import { TextButton } from 'components/TextButton';
import { CapacitySelector } from '../CapacitySelector';
import { ColorSelector } from '../ColorSelector';
import { ColorName } from 'types/ProductColors';
import { ProductDetails } from 'types/ProductDetailsPage';

type CustomSelectorsAreaProps = {
  product: ProductDetails;
  availableColors: ColorName[];
};

export const CustomSelectorsArea = ({
  product,
  availableColors,
}: CustomSelectorsAreaProps) => {
  const isTablet = useMediaQuery({ maxWidth: 1199 });

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get('id');

  return (
    <div className={styles.container}>
      <div className={styles.container__content}>
        <ColorSelector product={product} colorsAvailable={availableColors} />
        <hr />
        <CapacitySelector />
        <hr />
        <div className={styles.container__content__prices}>
          <span className={styles.container__content__prices__current}>
            {`$${product.priceDiscount}`}
          </span>
          <span className={styles.container__content__prices__full}>
            {`$${product.priceRegular}`}
          </span>
        </div>
        <div className={styles.container__content__buttons}>
          <TextButton title={'Add to cart'} height={'48px'} />
          <IconButton
            icon={<FiHeart size={24} />}
            useBorder={true}
            height={'48px'}
            width={'48px'}
          />
        </div>
        <ProductInfoDisplay />
      </div>
      {!isTablet && <span className={styles.container__id}>{`ID: ${id}`}</span>}
    </div>
  );
};
