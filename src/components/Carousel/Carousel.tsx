import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { IconButton } from '../IconButton';
import styles from './Carousel.module.scss';
import { useMediaQuery } from 'react-responsive';

export const Carousel = () => {
  const isMobile = useMediaQuery({ maxWidth: 639 });

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
      <img
        src={
          isMobile
            ? '/img/banners/banner_iPhone14Pro_mobile.png'
            : '/img/banners/banner_iPhone14Pro.png'
        }
        alt="Banner"
        className={styles.carouselImage}
      />
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
