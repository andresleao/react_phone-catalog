import { FiChevronRight, FiHome } from 'react-icons/fi';
import styles from './NavHistory.module.scss';

export const NavHistory = () => {
  return (
    <div className={styles.container}>
      <FiHome color={'#313237'} />
      <FiChevronRight color={'#89939A'} />
      <span className={styles.container__item__active}>phones</span>
    </div>
  );
};
