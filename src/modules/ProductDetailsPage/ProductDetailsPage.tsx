import styles from './ProductDetails.module.scss';
import { FiChevronLeft } from 'react-icons/fi';
import { useNavigate, useParams } from 'react-router-dom';
import { IconTextButton } from 'components/IconTextButton';
import { NavHistory } from 'components/NavHistory';
import { CustomSection } from 'components/CustomSection';
import { ImagesDisplay } from './components/ImagesDisplay';
import { CustomSelectorsArea } from './components/CustomSelectorsArea';
import { AboutArea } from './components/AboutArea';
import { TechSpecsArea } from './components/TechSpecsArea';

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
        <ImagesDisplay />
        <CustomSelectorsArea />
      </div>

      <div className={styles.container__grid__info}>
        <AboutArea />
        <TechSpecsArea />
      </div>

      <div className={styles.container__list}>
        <CustomSection title={'You may also like'} />
      </div>
    </div>
  );
};
