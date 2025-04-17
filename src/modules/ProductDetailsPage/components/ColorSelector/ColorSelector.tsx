import styles from './ColorSelector.module.scss';
import { useMediaQuery } from 'react-responsive';
import { useParams } from 'react-router-dom';
import { COLOR_MAP, ColorName } from 'types/ProductColors';

type ColorSelectorProps = {
  productName: string;
  colorsAvailable: ColorName[];
};

export const ColorSelector = ({
  productName,
  colorsAvailable,
}: ColorSelectorProps) => {
  const { id } = useParams();
  const isTablet = useMediaQuery({ maxWidth: 1199 });

  return (
    <div className={styles.container}>
      <div className={styles.container__label}>
        <span className={styles.container__label__info}>Available colors</span>
        {isTablet && (
          <span className={styles.container__label__id}>{`ID: ${id}`}</span>
        )}
      </div>
      <div className={styles.container__content}>
        {colorsAvailable.map(color => (
          <div key={color} className={styles.container__content__wrapper}>
            <div
              className={styles.container__content__wrapper__item}
              style={{
                backgroundColor: COLOR_MAP[color],
                border: productName.endsWith(color)
                  ? '2px solid #313237'
                  : 'none',
              }}
              title={color.charAt(0).toUpperCase() + color.slice(1)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
