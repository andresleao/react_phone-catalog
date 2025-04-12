import { FiChevronLeft } from 'react-icons/fi';
import { IconTextButton } from '../../components/IconTextButton';
import { NavHistory } from '../../components/NavHistory';
import styles from './PhoneDetails.module.scss';

export const PhoneDetailsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__nav}>
        <NavHistory />
        <IconTextButton
          label={'Back'}
          icon={<FiChevronLeft size={14} />}
          onClick={() => {}}
        />
      </div>
      <span className={styles.container__title}>
        Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
      </span>
    </div>
  );
};
