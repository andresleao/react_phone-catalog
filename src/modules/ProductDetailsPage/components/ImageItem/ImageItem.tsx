import styles from './ImageItem.module.scss';

export const ImageItem = () => {
  return (
    <div className={styles.container}>
      <img src={'/img/category-phones.png'} />
    </div>
  );
};
