import cn from 'classnames';
import styles from './IconButton.module.scss';
import { ReactNode } from 'react';

type IconButtonProps = {
  icon: ReactNode;
  useBorder?: boolean;
};

export const IconButton = ({ icon, useBorder = false }: IconButtonProps) => {
  return (
    <div
      className={cn(styles.container, {
        [styles.container__border]: useBorder,
      })}
    >
      {icon}
    </div>
  );
};
