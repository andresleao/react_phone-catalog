import { useParams } from 'react-router-dom';
import styles from './CustomFeatures.module.scss';
import { CustomSelectorsArea } from '../CustomSelectorsArea';

export const CustomFeatures = () => {
  const { id } = useParams();

  return (
    <div className={styles.container}>
      <div className={styles.container__grid}>
        <CustomSelectorsArea />
        <span className={styles.container__grid__id}>{`ID: ${id}`}</span>
      </div>
    </div>
  );
};
