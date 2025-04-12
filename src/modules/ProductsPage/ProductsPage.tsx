import { Navigate, useParams } from 'react-router-dom';
import { AppSelect } from '../../components/AppSelect';
import { NavHistory } from '../../components/NavHistory';
import { ProductsList } from './components/ProdcutsList';
import styles from './ProductsPage.module.scss';
import { AppPathRoute } from '../../types/AppPathRoute';

export const ProductsPage = () => {
  const { type } = useParams();

  const isValidType = (value: string): value is AppPathRoute => {
    return Object.values(AppPathRoute).includes(value as AppPathRoute);
  };

  if (!type || !isValidType(type)) {
    return <Navigate to="/" replace />;
  }

  const getPagesTitle = () => {
    switch (type) {
      case AppPathRoute.Phones:
        return 'Mobile phones';
      case AppPathRoute.Tablets:
        return 'Tablets';
      case AppPathRoute.Accessories:
        return 'Accessories';
      default:
        return '';
    }
  };

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
            {getPagesTitle()}
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
