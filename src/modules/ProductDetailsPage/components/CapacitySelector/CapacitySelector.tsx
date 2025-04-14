import cn from 'classnames';
import styles from './CapatitySelector.module.scss';

export const CapacitySelector = () => {
  const capacities = ['64 GB', '256 GB', '512 GB'];
  const isActive = true;

  return (
    <div className={styles.container}>
      <span className={styles.container__label}>Select capacity</span>
      <div className={styles.container__items}>
        {capacities.map(capacity => (
          <div
            key={capacity}
            className={cn(styles.container__items__item, {
              [styles.container__items__item__active]: isActive,
            })}
          >
            <span>{capacity}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
