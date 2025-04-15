import styles from './ProductCard.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { FiHeart } from 'react-icons/fi';
import { IconButton } from 'components/IconButton';
import { TextButton } from 'components/TextButton';
import { ProductInfoDisplay } from 'components/ProductInfoDisplay';

export const ProductCard = () => {
  const { type } = useParams();
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(`/${type}/1`);
  };

  return (
    <div className={styles.container} onClick={handleOnClick}>
      <img
        src={'/img/phones/apple-iphone-xs-max/gold/00.webp'}
        alt="Product photo"
      />
      <span className={styles.container__name}>
        Apple iPhone Xs 64GB Silver (iMT9G2FS/A)
      </span>
      <div className={styles.container__price}>
        <span className={styles.container__price__item}>$799</span>
        <span className={styles['container__price__item--full']}>$899</span>
      </div>
      <hr className={styles.container__separator} />
      <ProductInfoDisplay />
      <div className={styles.container__buttons}>
        <TextButton title={'Add to cart'} />
        <IconButton
          icon={<FiHeart size={24} />}
          useBorder={true}
          height={'40px'}
          width={'40px'}
        />
      </div>
    </div>
  );
};
