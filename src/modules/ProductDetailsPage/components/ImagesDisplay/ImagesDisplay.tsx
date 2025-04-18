import styles from './ImagesDisplay.module.scss';
import { useMediaQuery } from 'react-responsive';
import { ImageItem } from '../ImageItem';
import { useState } from 'react';

type ImagesDisplayProps = {
  images: { id: string; src: string }[];
};

export const ImagesDisplay = ({ images }: ImagesDisplayProps) => {
  const [selectedImage, setSelectedImage] = useState<{
    id: string;
    src: string;
  }>(images[0]);

  const isMobile = useMediaQuery({ maxWidth: 639 });

  const handleSetSelectedImage = (image: { id: string; src: string }) => {
    setSelectedImage(image);
  };

  return (
    <div className={styles.container}>
      {!isMobile && (
        <ul className={styles.container__list}>
          {images.map(i => (
            <li key={i.id} className={styles.item}>
              <ImageItem
                imageUrl={i.src}
                isSelected={selectedImage.id === i.id}
                setSelectedImage={() => handleSetSelectedImage(i)}
              />
            </li>
          ))}
        </ul>
      )}
      <div className={styles.container__main}>
        <img src={`${selectedImage.src}`} />
      </div>
      {isMobile && (
        <ul className={styles.container__list}>
          {images.map(i => (
            <li key={i.id} className={styles.item}>
              <ImageItem
                imageUrl={i.src}
                isSelected={selectedImage.id === i.id}
                setSelectedImage={() => handleSetSelectedImage(i)}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
