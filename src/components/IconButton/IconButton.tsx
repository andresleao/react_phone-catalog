import styles from './IconButton.module.scss';
import { ReactNode } from 'react';
import cn from 'classnames';

type IconButtonProps = {
  icon: ReactNode;
  useBorder?: boolean;
  borderColor?: string;
  height?: string;
  width?: string;
  isActive?: boolean;
};

export const IconButton = ({
  icon,
  useBorder = false,
  borderColor,
  height,
  width,
  isActive = true,
}: IconButtonProps) => {
  return (
    <button
      className={cn(styles.container, {
        [styles.container__border]: useBorder,
        [styles['container__border--active']]: useBorder && isActive,
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
