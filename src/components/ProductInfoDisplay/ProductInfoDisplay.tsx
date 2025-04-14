import styles from './ProductInfoDisplay.module.scss';

export const ProductInfoDisplay = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__info}>
        <span className={styles.container__info__title}>Screen</span>
        <span className={styles.container__info__value}>5.8” OLED</span>
      </div>
      <div className={styles.container__info}>
        <span className={styles.container__info__title}>Capacity</span>
        <span className={styles.container__info__value}>64 GB</span>
      </div>
      <div className={styles.container__info}>
        <span className={styles.container__info__title}>RAM</span>
        <span className={styles.container__info__value}>4 GB</span>
      </div>
    </div>
  );
};
