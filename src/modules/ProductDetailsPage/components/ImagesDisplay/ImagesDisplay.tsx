import styles from './ImagesDisplay.module.scss';
import { useMediaQuery } from 'react-responsive';
import { ImageItem } from '../ImageItem';
import { useState } from 'react';

type ImagesDisplayProps = {
  images: string[];
};

export const ImagesDisplay = ({ images }: ImagesDisplayProps) => {
  const [selectedImage, setSelectedImage] = useState<string>(images[0]);

  const isMobile = useMediaQuery({ maxWidth: 639 });

  const handleSetSelectedImage = (image: string) => {
    setSelectedImage(image);
  };

  return (
    <div className={styles.container}>
      {!isMobile && (
        <ul className={styles.container__list}>
          {images.map(i => (
            <li key={i} className={styles.item}>
              <ImageItem
                imageUrl={i}
                isSelected={selectedImage === i}
                setSelectedImage={() => handleSetSelectedImage(i)}
              />
            </li>
          ))}
        </ul>
      )}
      <div className={styles.container__main}>
        <img src={`/${selectedImage}`} />
      </div>
      {isMobile && (
        <ul className={styles.container__list}>
          {images.map(i => (
            <li key={i} className={styles.item}>
              <ImageItem
                imageUrl={i}
                isSelected={selectedImage === i}
                setSelectedImage={() => handleSetSelectedImage(i)}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
