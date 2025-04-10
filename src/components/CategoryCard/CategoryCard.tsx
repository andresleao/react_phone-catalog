import styles from './CategoryCard.module.scss';

export const CategoryCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__photo}>
        <img
          src="/public/img/category-phones.png"
          alt="Phones category photo"
        />
      </div>
      <div className={styles.container__info}>
        <span className={styles.container__info__title}>Mobile phones</span>
        <span className={styles.container__info__amount}>95 models</span>
      </div>
    </div>
  );
};
