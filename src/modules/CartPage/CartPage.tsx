import styles from './CartPage.module.scss';
import { FiChevronLeft } from 'react-icons/fi';
import { IconTextButton } from 'components/IconTextButton';
import { CartItem } from './components/CartItem';
import { CheckoutItem } from './components/CheckoutItem';

export const CartPage = () => {
  return (
    <div className={styles.container}>
      <IconTextButton
        icon={<FiChevronLeft />}
        label={'Back'}
        onClick={() => {}}
      />
      <span className={styles.container__title}>Cart</span>
      <div className={styles.container__content}>
        <div className={styles.container__content__list}>
          {[...Array(4)].map((_, index) => (
            <CartItem key={index} />
          ))}
        </div>
        <CheckoutItem />
      </div>
    </div>
  );
};
