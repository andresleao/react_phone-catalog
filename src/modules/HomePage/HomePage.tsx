import styles from './HomePage.module.scss';
import { Carousel } from 'components/Carousel';
import { CustomSection } from 'components/CustomSection';
import { CategoriesSection } from './components/CategoriesSection';

export const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__intro}>
        <h1>Welcome to Nice Gadgets store!</h1>
        <Carousel />
      </div>
      <CustomSection title={'Brand new models'} />
      <CategoriesSection />
      <CustomSection title={'Hot prices'} />
    </div>
  );
};
