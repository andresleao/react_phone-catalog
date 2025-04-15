import styles from './ProductCard.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { FiHeart } from 'react-icons/fi';
import { IconButton } from 'components/IconButton';
import { TextButton } from 'components/TextButton';
import { ProductInfoDisplay } from 'components/ProductInfoDisplay';
import { Product } from 'types/Product';

type ProductCardProps = {
  product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  const { type } = useParams();
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(`/${type}/${product.id}`);
  };

  return (
    <div className={styles.container} onClick={handleOnClick}>
      <img src={`/${product.image}`} alt="Product photo" />
      <span className={styles.container__name}>{product.name}</span>
      <div className={styles.container__price}>
        <span className={styles.container__price__item}>
          {`$${product.price}`}
        </span>
        {product.fullPrice && (
          <span className={styles['container__price__item--full']}>
            {`$${product.fullPrice}`}
          </span>
        )}
      </div>
      <hr className={styles.container__separator} />
      <ProductInfoDisplay />
      <div className={styles.container__buttons}>
        <TextButton title={'Add to cart'} />
        <IconButton
          icon={<FiHeart size={24} />}
          useBorder={true}
          height={'40px'}
          width={'40px'}
        />
      </div>
    </div>
  );
};
