import styles from './CustomSelectorsArea.module.scss';
import { useParams } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { FiHeart } from 'react-icons/fi';
import { ProductInfoDisplay } from 'components/ProductInfoDisplay';
import { IconButton } from 'components/IconButton';
import { TextButton } from 'components/TextButton';
import { CapacitySelector } from '../CapacitySelector';
import { ColorSelector } from '../ColorSelector';

export const CustomSelectorsArea = () => {
  const { id } = useParams();
  const isTablet = useMediaQuery({ maxWidth: 1199 });

  return (
    <div className={styles.container}>
      <div className={styles.container__content}>
        <ColorSelector />
        <hr />
        <CapacitySelector />
        <hr />
        <div className={styles.container__content__prices}>
          <span className={styles.container__content__prices__current}>
            $799
          </span>
          <span className={styles.container__content__prices__full}>$1199</span>
        </div>
        <div className={styles.container__content__buttons}>
          <TextButton title={'Add to cart'} height={'48px'} />
          <IconButton
            icon={<FiHeart size={24} />}
            useBorder={true}
            height={'48px'}
            width={'48px'}
          />
        </div>
        <ProductInfoDisplay />
      </div>
      {!isTablet && <span className={styles.container__id}>{`ID: ${id}`}</span>}
    </div>
  );
};
