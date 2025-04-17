import styles from './ImageItem.module.scss';

type ImageItemProps = {
  imageUrl: string;
};

export const ImageItem = ({ imageUrl }: ImageItemProps) => {
  return (
    <div className={styles.container}>
      <img src={imageUrl} />
    </div>
  );
};
