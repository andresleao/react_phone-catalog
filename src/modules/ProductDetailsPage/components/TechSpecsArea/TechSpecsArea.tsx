import styles from './TechSpecsArea.module.scss';
import { ProductInfoDisplay } from 'components/ProductInfoDisplay';

export const TechSpecsArea = () => {
  return (
    <div className={styles.container}>
      <span className={styles.container__title}>Tech specs</span>
      <hr />
      <ProductInfoDisplay />
    </div>
  );
};
