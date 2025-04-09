import { IconButton } from '../IconButton';
import { Logo } from '../Logo';
import styles from './Footer.module.scss';
import { FiChevronUp } from 'react-icons/fi';

export const Footer = () => (
  <footer className={styles.container}>
    <div className={styles.container__content}>
      <div className={styles.container__content__logo}>
        <Logo />
      </div>
      <div className={styles.container__content__links}>
        <span>GITHUB</span>
        <span>CONTACTS</span>
        <span>RIGHTS</span>
      </div>
      <div className={styles.container__content__item}>
        <span>Back to top</span>
        <IconButton
          icon={<FiChevronUp size={24} />}
          useBorder={true}
          borderColor={'#B4BDC3'}
          height={'32px'}
          width={'32px'}
        />
      </div>
    </div>
  </footer>
);
