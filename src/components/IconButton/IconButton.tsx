import cn from 'classnames';
import styles from './IconButton.module.scss';
import { ReactNode } from 'react';

type IconButtonProps = {
  icon: ReactNode;
  useBorder?: boolean;
  borderColor?: string;
};

export const IconButton = ({
  icon,
  useBorder = false,
  borderColor,
}: IconButtonProps) => {
  return (
    <button
      className={cn(styles.container, {
        [styles.container__border]: useBorder,
      })}
      style={useBorder && borderColor ? { borderColor } : undefined}
    >
      {icon}
    </button>
  );
};
