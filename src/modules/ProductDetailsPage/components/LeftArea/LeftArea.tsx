import { AboutArea } from '../AboutArea';
import { ImagesDisplay } from '../ImagesDisplay';
import styles from './LeftArea.module.scss';

export const LeftArea = () => {
  return (
    <div className={styles.container}>
      <ImagesDisplay />
      <AboutArea />
    </div>
  );
};
