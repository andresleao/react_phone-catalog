import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { IconButton } from '../../../../components/IconButton';
import styles from './PageSelector.module.scss';

export const PageSelector = () => {
  return (
    <div className={styles.container}>
      <IconButton
        icon={<FiChevronLeft size={18} />}
        useBorder
        width={'32px'}
        height={'32px'}
      />
      <div className={styles.container__content}>
        {[1, 2, 3, 4, 5].map(e => (
          <div key={e} className={styles.container__content__item}>
            {/* Adicionar class no span apenas se selecionado */}
            <span className={styles.container__content__item__selected}>
              {e}
            </span>
          </div>
        ))}
      </div>
      <IconButton
        icon={<FiChevronRight size={18} />}
        useBorder
        width={'32px'}
        height={'32px'}
      />
    </div>
  );
};
