import { CategoryCard } from '../../../../components/CategoryCard';
import styles from './CategoriesSection.module.scss';

export const CategoriesSection = () => {
  return (
    <section className={styles.container}>
      <span className={styles.container__title}>Shop by category</span>
      <div className={styles.container__content}>
        <CategoryCard
          backgroundColor={' bisque'}
          imgUrl="/public/img/category-phones.png"
          title={'Mobile phones'}
          description={'95 models'}
        />
        <CategoryCard
          backgroundColor={'#89939A'}
          imgUrl="/public/img/category-tablets.webp"
          title={'Tablets'}
          description={'24 models'}
          imgTransform={'translate(50px, 44px)'}
        />
        <CategoryCard
          backgroundColor={'pink'}
          imgUrl="/public/img/category-accessories.png"
          title={'Accessories'}
          description={'100 models'}
          imgHeight={'44rem'}
          imgWidth={'48rem'}
          imgTransform={'translate(38px, 34px)'}
        />
      </div>
    </section>
  );
};
