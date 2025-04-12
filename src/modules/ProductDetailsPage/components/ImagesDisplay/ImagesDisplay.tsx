import { ImageItem } from '../ImageItem';
import styles from './ImagesDisplay.module.scss';

export const ImagesDisplay = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.container__list}>
        <li className={styles.item}>
          <ImageItem />
        </li>
        <li className={styles.item}>
          <ImageItem />
        </li>
        <li className={styles.item}>
          <ImageItem />
        </li>
        <li className={styles.item}>
          <ImageItem />
        </li>
        <li className={styles.item}>
          <ImageItem />
        </li>
      </ul>
      <div className={styles.container__main}>
        <img src={'/img/category-phones.png'} />
      </div>
    </div>
  );
};
