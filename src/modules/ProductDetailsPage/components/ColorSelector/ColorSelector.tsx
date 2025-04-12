import styles from './ColorSelector.module.scss';

export const ColorSelector = () => {
  return (
    <div className={styles.container}>
      <span>Available colors</span>
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
