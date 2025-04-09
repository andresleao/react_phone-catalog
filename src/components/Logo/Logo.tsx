import styles from './Logo.module.scss';
import { LogoIcon } from '../svg';

export const Logo = () => {
  return (
    <div className={styles.container}>
      <span className={styles.iconContainer}>👌</span>
      <LogoIcon />
    </div>
  );
};
