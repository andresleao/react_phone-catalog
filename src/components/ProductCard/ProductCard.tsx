import styles from './ProductCard.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { FiHeart } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';
import { IconButton } from 'components/IconButton';
import { TextButton } from 'components/TextButton';
import { ProductInfoDisplay } from 'components/ProductInfoDisplay';
import { Product } from 'types/Product';
import { addFavorite, isFavorite, removeFavorite } from 'utils/appLocalStorage';
import { useContext, useEffect, useState } from 'react';
import { ProductsContext } from 'store/ProductsContext';

type ProductCardProps = {
  product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  const { type } = useParams();
  const { setFavouriteAmount } = useContext(ProductsContext);
  const navigate = useNavigate();

  const [isFavoriteChecked, setIsFavoriteChecked] = useState(false);

  const handleOnClick = () => {
    navigate(`/${type}/${product.id}`);
  };

  const handleFavouritesOnClickButton = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.stopPropagation();

    if (isFavorite(product.id)) {
      removeFavorite(product.id);
      setFavouriteAmount(prev => prev - 1);
    } else {
      addFavorite(product.id);
      setFavouriteAmount(prev => prev + 1);
    }

    setIsFavoriteChecked(prev => !prev);
  };

  useEffect(() => {
    if (isFavorite(product.id)) {
      setIsFavoriteChecked(true);
    }
  }, [product.id]);

  return (
    <div className={styles.container} onClick={handleOnClick}>
      <div className={styles.container__content}>
        {product.image && <img src={`/${product.image}`} alt="Product photo" />}
        <span className={styles.container__content__name}>{product.name}</span>
        <div className={styles.container__content__price}>
          <span className={styles.container__content__price__item}>
            {`$${product.price}`}
          </span>
          {product.fullPrice && (
            <span className={styles['container__content__price__item--full']}>
              {`$${product.fullPrice}`}
            </span>
          )}
        </div>
        <hr className={styles.container__content__separator} />
        <ProductInfoDisplay />
      </div>
      <div className={styles.container__buttons}>
        <TextButton title={'Add to cart'} />
        <IconButton
          icon={
            isFavoriteChecked ? (
              <FaHeart size={24} color="#EB5757" />
            ) : (
              <FiHeart size={24} />
            )
          }
          useBorder={true}
          height={'40px'}
          width={'40px'}
          onClick={handleFavouritesOnClickButton}
        />
      </div>
    </div>
  );
};
