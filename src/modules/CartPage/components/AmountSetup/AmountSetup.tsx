import styles from './AmountSetup.module.scss';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { IconButton } from 'components/IconButton';

export const AmountSetup = () => {
  return (
    <div className={styles.container}>
      <IconButton icon={<FiMinus />} useBorder width={'32px'} height={'32px'} />
      <span className={styles.container__amount}>1</span>
      <IconButton icon={<FiPlus />} useBorder width={'32px'} height={'32px'} />
    </div>
  );
};
