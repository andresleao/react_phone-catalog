import { FiChevronLeft } from 'react-icons/fi';
import { IconTextButton } from '../../components/IconTextButton';
import { NavHistory } from '../../components/NavHistory';
import styles from './ProductDetails.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { CustomSection } from '../../components/CustomSection';
import { LeftArea } from './components/LeftArea';
import { RightArea } from './components/RightArea';

export const ProductDetailsPage = () => {
  const navigate = useNavigate();
  const { type } = useParams();

  return (
    <div className={styles.container}>
      <div className={styles.container__nav}>
        <NavHistory />
        <IconTextButton
          label={'Back'}
          icon={<FiChevronLeft size={14} />}
          onClick={() => navigate(`/${type}`)}
        />
      </div>
      <span className={styles.container__title}>
        Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
      </span>

      <div className={styles.container__grid}>
        <LeftArea />
        <RightArea />
      </div>

      <CustomSection title={'You may also like'} />
    </div>
  );
};
