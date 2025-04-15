import styles from './CheckoutItem.module.scss';
import { TextButton } from 'components/TextButton';

export const CheckoutItem = () => {
  return (
    <div className={styles.container}>
      <span className={styles.container__price}>$2657</span>
      <span className={styles.container__amount}>Total for 3 items</span>
      <hr />
      <div>
        <TextButton title={'Checkout'} height={'48px'} />
      </div>
    </div>
  );
};
