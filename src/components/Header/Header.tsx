import styles from './Header.module.scss';
import { Logo } from '../Logo';
import { FiHeart, FiShoppingBag } from 'react-icons/fi';
import { IconButton } from '../IconButton';

export const Header = () => {
  return (
    <header className={styles.container}>
      <Logo />
      <div className={styles.container__content}>
        <div className={styles.container__content__menu}>
          <span>HOME</span>
          <span>PHONES</span>
          <span>TABLETS</span>
          <span>ACCESSORIES</span>
        </div>
        <div className={styles.container__content__buttonsArea}>
          <IconButton icon={<FiHeart size={24} />} useBorder={true} />
          <IconButton icon={<FiShoppingBag size={24} />} />
        </div>
      </div>
    </header>
  );
};
