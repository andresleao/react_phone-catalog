import styles from './ColorSelector.module.scss';
import { useMediaQuery } from 'react-responsive';
import { COLOR_MAP, ColorName } from 'types/ProductColors';
import { ProductDetails } from 'types/ProductDetailsPage';

type ColorSelectorProps = {
  product: ProductDetails;
  colorsAvailable: ColorName[];
};

export const ColorSelector = ({
  product,
  colorsAvailable,
}: ColorSelectorProps) => {
  const isTablet = useMediaQuery({ maxWidth: 1199 });

  return (
    <div className={styles.container}>
      <div className={styles.container__label}>
        <span className={styles.container__label__info}>Available colors</span>
        {isTablet && (
          <span
            className={styles.container__label__id}
          >{`ID: ${product.id}`}</span>
        )}
      </div>
      <div className={styles.container__content}>
        {colorsAvailable.map(color => (
          <div key={color} className={styles.container__content__wrapper}>
            <div
              className={styles.container__content__wrapper__item}
              style={{
                backgroundColor: COLOR_MAP[color],
                border: product.name.endsWith(color)
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
