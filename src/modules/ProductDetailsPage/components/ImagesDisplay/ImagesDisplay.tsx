import styles from './ImagesDisplay.module.scss';
import { useMediaQuery } from 'react-responsive';
import { ImageItem } from '../ImageItem';

export const ImagesDisplay = () => {
  const isMobile = useMediaQuery({ maxWidth: 639 });

  return (
    <div className={styles.container}>
      {!isMobile && (
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
      )}
      <div className={styles.container__main}>
        <img src={'/img/category-phones.png'} />
      </div>
      {isMobile && (
        <ul className={styles.container__row}>
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
      )}
    </div>
  );
};
