import styles from './CustomSection.module.scss';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { IconButton } from 'components/IconButton';
import { ProductCard } from 'components/ProductCard';
import { Product } from 'types/Product';

type CustomSectionProps = {
  title: string;
  products: Product[];
};

export const CustomSection = ({ title, products }: CustomSectionProps) => {
  return (
    <section className={styles.container}>
      <div className={styles.container__header}>
        <span className={styles.container__header__title}>{title}</span>
        <div className={styles.container__header__buttons}>
          <IconButton
            icon={<FiChevronLeft size={24} color={'#E2E6E9'} />}
            isActive={false}
            useBorder={true}
            height={'32px'}
            width={'32px'}
          />
          <IconButton
            icon={<FiChevronRight size={24} />}
            useBorder={true}
            height={'32px'}
            width={'32px'}
          />
        </div>
      </div>

      <div className={styles.container__list}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
