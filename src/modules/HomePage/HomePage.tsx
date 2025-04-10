import { Carousel } from '../../components/Carousel';
import { NewModels } from './components/NewModels';
import styles from './HomePage.module.scss';

export const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1>Welcome to Nice Gadgets store!</h1>
      <Carousel />
      <NewModels />
    </div>
  );
};
