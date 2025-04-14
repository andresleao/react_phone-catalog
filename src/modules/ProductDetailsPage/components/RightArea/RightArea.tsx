import { CustomFeaturesArea } from '../CustomFeaturesArea';
import { TechSpecsArea } from '../TechSpecsArea';
import styles from './RightArea.module.scss';

export const RightArea = () => {
  return (
    <div className={styles.container}>
      <CustomFeaturesArea />
      <TechSpecsArea />
    </div>
  );
};
