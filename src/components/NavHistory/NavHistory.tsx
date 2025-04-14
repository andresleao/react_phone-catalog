import { FiChevronRight, FiHome } from 'react-icons/fi';
import styles from './NavHistory.module.scss';
import cn from 'classnames';
import { useNavigate, useParams } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

export const NavHistory = () => {
  const { type, id } = useParams();
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: 639 });

  return (
    <div className={styles.container}>
      <button
        className={styles.container__button}
        onClick={() => navigate('/')}
      >
        <FiHome color={'#313237'} />
      </button>
      <FiChevronRight color={'#89939A'} />
      <span>{type}</span>

      {!!id && (
        <>
          <FiChevronRight color={'#89939A'} />
          <span
            className={cn({
              [styles.active]: true,
              [styles.container__truncate]: isMobile,
            })}
          >
            Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
          </span>
        </>
      )}
    </div>
  );
};
