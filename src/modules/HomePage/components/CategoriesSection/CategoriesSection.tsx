import { CategoryCard } from '../../../../components/CategoryCard';
import styles from './CategoriesSection.module.scss';

export const CategoriesSection = () => {
  return (
    <section className={styles.container}>
      <span className={styles.container__title}>Shop by category</span>
      <div className={styles.container__content}>
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
    </section>
  );
};
