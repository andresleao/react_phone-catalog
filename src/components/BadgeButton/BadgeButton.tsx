import { IconButton } from '../IconButton';
import styles from './BadgeButton.module.scss';
import cn from 'classnames';
import { ReactNode } from 'react';

type BadgeButtonProps = {
  icon: ReactNode;
  onClick?: () => void;
  useBorder?: boolean;
  isSelected?: boolean;
  amount?: number;
};

export const BadgeButton = ({
  icon,
  onClick = () => {},
  isSelected,
  amount,
  useBorder = false,
}: BadgeButtonProps) => {
  return (
    <div
      className={cn(styles.container, {
        [styles.container__selected]: isSelected,
      })}
      onClick={onClick}
    >
      <IconButton
        icon={icon}
        height={'64px'}
        width={'64px'}
        useBorder={useBorder}
        borderColor={'#E2E6E9'}
      />
      <div className={styles.container__action} onClick={onClick} />
      {!!amount && (
        <div className={styles.container__badge}>
          <span>{amount}</span>
        </div>
      )}
    </div>
  );
};
