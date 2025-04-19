import styles from './CustomSelectorsArea.module.scss';
import { useMediaQuery } from 'react-responsive';
import { FiHeart } from 'react-icons/fi';
import { IconButton } from 'components/IconButton';
import { TextButton } from 'components/TextButton';
import { CapacitySelector } from '../CapacitySelector';
import { ColorSelector } from '../ColorSelector';
import { useContext, useState } from 'react';
import { ProductDetailsContext } from 'store/ProductDetailsContext';
import { ProductDetailsInfoDisplay } from '../ProductDetailsInfoDisplay';
import { addFavorite, isFavorite, removeFavorite } from 'utils/appLocalStorage';
import { FaHeart } from 'react-icons/fa';
import { ProductsContext } from 'store/ProductsContext';

export const CustomSelectorsArea = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get('id');

  const isTablet = useMediaQuery({ maxWidth: 1199 });

  const { product } = useContext(ProductDetailsContext);
  const { setFavouriteAmount } = useContext(ProductsContext);

  const [isFavoriteChecked, setIsFavoriteChecked] = useState(
    id ? isFavorite(id!) : false,
  );

  if (!product && !id) {
    return;
  }

  const handleFavouritesOnClickButton = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.stopPropagation();

    if (!id) {
      return;
    }

    if (isFavoriteChecked) {
      removeFavorite(id);
      setFavouriteAmount(prev => prev - 1);
    } else {
      addFavorite(id);
      setFavouriteAmount(prev => prev + 1);
    }

    setIsFavoriteChecked(prev => !prev);
  };

  return (
    <div className={styles.container}>
      <div className={styles.container__content}>
        <ColorSelector />
        <hr />
        <CapacitySelector />
        <hr />
        <div className={styles.container__content__prices}>
          <span className={styles.container__content__prices__current}>
            {`$${product?.priceDiscount}`}
          </span>
          <span className={styles.container__content__prices__full}>
            {`$${product?.priceRegular}`}
          </span>
        </div>
        <div className={styles.container__content__buttons}>
          <TextButton title={'Add to cart'} height={'48px'} />
          <IconButton
            icon={
              isFavoriteChecked ? (
                <FaHeart size={24} color="#EB5757" />
              ) : (
                <FiHeart size={24} />
              )
            }
            useBorder={true}
            height={'48px'}
            width={'48px'}
            onClick={handleFavouritesOnClickButton}
          />
        </div>
        <ProductDetailsInfoDisplay />
      </div>
      {!isTablet && <span className={styles.container__id}>{`ID: ${id}`}</span>}
    </div>
  );
};
