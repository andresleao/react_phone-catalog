import styles from './ImagesDisplay.module.scss';
import { useMediaQuery } from 'react-responsive';
import { ImageItem } from '../ImageItem';

type ImagesDisplayProps = {
  imageUrl: string;
  productName: string;
  images: { id: string; src: string }[];
};

export const ImagesDisplay = ({
  imageUrl,

  images,
}: ImagesDisplayProps) => {
  const isMobile = useMediaQuery({ maxWidth: 639 });

  return (
    <div className={styles.container}>
      {!isMobile && (
        <ul className={styles.container__list}>
          {images.map(i => (
            <li key={i.id} className={styles.item}>
              <ImageItem imageUrl={i.src} />
            </li>
          ))}
        </ul>
      )}
      <div className={styles.container__main}>
        <img src={`/${imageUrl}`} />
      </div>
      {isMobile && (
        <ul className={styles.container__list}>
          {images.map(i => (
            <li key={i.id} className={styles.item}>
              <ImageItem imageUrl={i.src} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
