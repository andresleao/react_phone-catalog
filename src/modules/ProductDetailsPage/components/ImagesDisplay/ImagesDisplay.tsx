import styles from './ImagesDisplay.module.scss';
import { useMediaQuery } from 'react-responsive';
import { ImageItem } from '../ImageItem';
import { useParams } from 'react-router-dom';

type ImagesDisplayProps = {
  imageUrl: string;
  productName: string;
};

export const ImagesDisplay = ({
  imageUrl,
  productName,
}: ImagesDisplayProps) => {
  const { type } = useParams();
  const isMobile = useMediaQuery({ maxWidth: 639 });

  const parts = productName.split(' ');
  const brand = parts[0];
  const model = `${parts[1]} ${parts[2]}`;
  const color = parts[parts.length - 1];

  const basePath = `/img/${type}/${brand.toLowerCase()}-${model.toLowerCase().replace(' ', '-')}/${color.toLowerCase()}`;

  const imageList = ['00', '01', '02', '03', '04'].map(num => ({
    id: num,
    src: `${basePath}/${num}.webp`,
  }));

  return (
    <div className={styles.container}>
      {!isMobile && (
        <ul className={styles.container__list}>
          {imageList.map(i => (
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
        <ul className={styles.container__row}>
          <li className={styles.item}>
            <ImageItem imageUrl={imageList[0].src} />
          </li>
          <li className={styles.item}>
            <ImageItem imageUrl={imageList[1].src} />
          </li>
          <li className={styles.item}>
            <ImageItem imageUrl={imageList[2].src} />
          </li>
          <li className={styles.item}>
            <ImageItem imageUrl={imageList[3].src} />
          </li>
          <li className={styles.item}>
            <ImageItem imageUrl={imageList[4].src} />
          </li>
        </ul>
      )}
    </div>
  );
};
