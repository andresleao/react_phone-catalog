import styles from './CustomFeaturesArea.module.scss';
import { useParams } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { CustomSelectorsArea } from '../CustomSelectorsArea';

export const CustomFeaturesArea = () => {
  const { id } = useParams();
  const isTablet = useMediaQuery({ maxWidth: 1199 });

  return (
    <div className={styles.container}>
      <div className={styles.container__grid}>
        <CustomSelectorsArea />
        {!isTablet && (
          <span className={styles.container__grid__id}>{`ID: ${id}`}</span>
        )}
      </div>
    </div>
  );
};
