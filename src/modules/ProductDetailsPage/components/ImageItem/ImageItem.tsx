import styles from './ImageItem.module.scss';

type ImageItemProps = {
  imageUrl: string;
  setSelectedImage: () => void;
  isSelected: boolean;
};

export const ImageItem = ({
  imageUrl,
  setSelectedImage,
  isSelected,
}: ImageItemProps) => {
  return (
    <div
      className={`${styles.container} ${isSelected ? styles.selected : ''}`}
      onClick={setSelectedImage}
    >
      <img src={imageUrl} alt="image-item" />
    </div>
  );
};
