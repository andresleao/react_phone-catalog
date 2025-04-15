import styles from './ColorSelector.module.scss';
import { useMediaQuery } from 'react-responsive';
import { useParams } from 'react-router-dom';

export const ColorSelector = () => {
  const { id } = useParams();
  const isTablet = useMediaQuery({ maxWidth: 1199 });

  return (
    <div className={styles.container}>
      <div className={styles.container__label}>
        <span className={styles.container__label__info}>Available colors</span>
        {isTablet && (
          <span className={styles.container__label__id}>{`ID: ${id}`}</span>
        )}
      </div>
      <div className={styles.container__content}>
        <div className={styles.container__content__wrapper}>
          <div
            className={styles.container__content__wrapper__item}
            style={{ backgroundColor: '#FCDBC1' }}
          />
        </div>
        <div className={styles.container__content__wrapper}>
          <div
            className={styles.container__content__wrapper__item}
            style={{ backgroundColor: '#5F7170' }}
          />
        </div>
        <div className={styles.container__content__wrapper}>
          <div
            className={styles.container__content__wrapper__item}
            style={{ backgroundColor: '#4C4C4C' }}
          />
        </div>
        <div className={styles.container__content__wrapper}>
          <div
            className={styles.container__content__wrapper__item}
            style={{ backgroundColor: '#F0F0F0' }}
          />
        </div>
      </div>
    </div>
  );
};
