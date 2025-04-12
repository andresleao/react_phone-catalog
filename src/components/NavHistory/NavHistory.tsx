import { FiChevronRight, FiHome } from 'react-icons/fi';
import styles from './NavHistory.module.scss';
import cn from 'classnames';

export const NavHistory = () => {
  return (
    <div className={styles.container}>
      <FiHome color={'#313237'} />
      <FiChevronRight color={'#89939A'} />
      <span>phones</span>
      <FiChevronRight color={'#89939A'} />
      <span className={cn({ [styles.active]: true })}>
        Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
      </span>
    </div>
  );
};
