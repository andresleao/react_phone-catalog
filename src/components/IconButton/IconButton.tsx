import styles from './IconButton.module.scss';
import { ReactNode } from 'react';
import cn from 'classnames';

type IconButtonProps = {
  icon: ReactNode;
  useBorder?: boolean;
  borderColor?: string;
  height?: string;
  width?: string;
};

export const IconButton = ({
  icon,
  useBorder = false,
  borderColor,
  height,
  width,
}: IconButtonProps) => {
  return (
    <button
      className={cn(styles.container, {
        [styles.container__border]: useBorder,
      })}
      style={{
        ...(useBorder && borderColor ? { borderColor } : {}),
        ...(height ? { height } : {}),
        ...(width ? { width } : {}),
      }}
    >
      {icon}
    </button>
  );
};
