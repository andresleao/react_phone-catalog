import styles from './TextButton.module.scss';

type TextButtonProps = {
  title: string;
  height?: string;
};

export const TextButton = ({ title, height }: TextButtonProps) => {
  return (
    <div className={styles.container} style={{ ...(height ? { height } : {}) }}>
      <button>
        <span>{title}</span>
      </button>
    </div>
  );
};
