import { FiHeart } from 'react-icons/fi';
import { IconButton } from '../IconButton';
import styles from './ProductCard.module.scss';
import { TextButton } from '../TextButton';
import { useNavigate, useParams } from 'react-router-dom';

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
      <div className={styles.container__info}>
        <div className={styles.container__info__data}>
          <span className={styles.container__info__data__title}>Screen</span>
          <span className={styles.container__info__data__value}>5.8” OLED</span>
        </div>
        <div className={styles.container__info__data}>
          <span className={styles.container__info__data__title}>Capacity</span>
          <span className={styles.container__info__data__value}>64 GB</span>
        </div>
        <div className={styles.container__info__data}>
          <span className={styles.container__info__data__title}>RAM</span>
          <span className={styles.container__info__data__value}>4 GB</span>
        </div>
      </div>
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
