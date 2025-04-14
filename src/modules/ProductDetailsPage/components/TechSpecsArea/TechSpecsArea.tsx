import { ProductInfoDisplay } from '../../../../components/ProductInfoDisplay';
import styles from './TechSpecsArea.module.scss';

export const TechSpecsArea = () => {
  return (
    <div className={styles.container}>
      <span className={styles.container__title}>Tech specs</span>
      <hr />
      <ProductInfoDisplay />
    </div>
  );
};
