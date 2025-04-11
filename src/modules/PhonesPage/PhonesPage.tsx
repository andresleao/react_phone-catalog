import { AppSelect } from '../../components/AppSelect';
import { NavHistory } from '../../components/NavHistory';
import { ProductsList } from './components/ProdcutsList';
import styles from './PhonesPage.module.scss';

export const PhonesPage = () => {
  const sortBy = ['Newest', 'Alphabetically', 'Cheapest'];
  const itemsOnPage = ['4', '8', '16', 'all'];

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.container__content__history}>
          <NavHistory />
        </div>
        <div className={styles.container__content__selects}>
          <AppSelect
            id={'sortBy'}
            label={'Sort by'}
            width={'176px'}
            options={sortBy}
          />
          <AppSelect
            id={'itemsOnPage'}
            label={'Items on page'}
            width={'88px'}
            options={itemsOnPage}
          />
        </div>
        <div className={styles.container__content__info}>
          <span className={styles.container__content__title}>
            Mobile phones
          </span>
          <span className={styles.container__content__list_lenght}>
            95 models
          </span>
        </div>
        <ProductsList />
      </div>
    </div>
  );
};
