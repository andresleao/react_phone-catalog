import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { IconButton } from '../IconButton';
import styles from './Carousel.module.scss';

export const Carousel = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__button}>
        <IconButton
          icon={<FiChevronLeft size={24} />}
          useBorder={true}
          borderColor={'#B4BDC3'}
          width={'32px'}
        />
      </div>
      <img src="/img/banners/banner_iPhone14Pro.png" alt="Banner" />
      <div className={styles.container__button}>
        <IconButton
          icon={<FiChevronRight size={24} />}
          useBorder={true}
          borderColor={'#B4BDC3'}
          width={'32px'}
        />
      </div>
    </div>
  );
};
