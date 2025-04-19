import styles from './ImagesDisplay.module.scss';
import { useMediaQuery } from 'react-responsive';
import { ImageItem } from '../ImageItem';
import { useContext, useState } from 'react';
import { ProductDetailsContext } from 'store/ProductDetailsContext';

export const ImagesDisplay = () => {
  const { product } = useContext(ProductDetailsContext);

  const [selectedImage, setSelectedImage] = useState<string>(
    product ? product.images[0] : '',
  );

  const isMobile = useMediaQuery({ maxWidth: 639 });

  const handleSetSelectedImage = (image: string) => {
    setSelectedImage(image);
  };

  if (!product) {
    return;
  }

  return (
    <div className={styles.container}>
      {!isMobile && (
        <ul className={styles.container__list}>
          {product.images.map(i => (
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
          {product.images.map(i => (
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
