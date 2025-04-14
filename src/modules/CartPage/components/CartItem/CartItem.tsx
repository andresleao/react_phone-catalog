import { IconButton } from '../../../../components/IconButton';
import { AmountSetup } from '../AmountSetup';
import styles from './CartItem.module.scss';
import { FiX } from 'react-icons/fi';

export const CartItem = () => {
  return (
    <div className={styles.container}>
      <IconButton icon={<FiX size={16} color={'#B4BDC3'} />} />
      <div className={styles.container__product}>
        <img
          src={'/img/phones/apple-iphone-xs-max/gold/00.webp'}
          alt="Product photo"
        />
        <span className={styles.container__product__name}>
          Apple iPhone 14 Pro 128GB Silver (MQ023)
        </span>
      </div>
      <div className={styles.container__product__display}>
        <AmountSetup />
        <span className={styles.container__product__display__price}>$999</span>
      </div>
    </div>
  );
};
