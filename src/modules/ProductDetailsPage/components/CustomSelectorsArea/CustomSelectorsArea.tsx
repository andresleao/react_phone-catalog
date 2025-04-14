import { FiHeart } from 'react-icons/fi';
import { IconButton } from '../../../../components/IconButton';
import { TextButton } from '../../../../components/TextButton';
import { CapacitySelector } from '../CapacitySelector';
import { ColorSelector } from '../ColorSelector';
import styles from './CustomSelectorsArea.module.scss';
import { ProductInfoDisplay } from '../../../../components/ProductInfoDisplay';

export const CustomSelectorsArea = () => {
  return (
    <div className={styles.container}>
      <ColorSelector />
      <hr />
      <CapacitySelector />
      <hr />
      <div className={styles.container__prices}>
        <span className={styles.container__prices__current}>$799</span>
        <span className={styles.container__prices__full}>$1199</span>
      </div>
      <div className={styles.container__buttons}>
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
  );
};
