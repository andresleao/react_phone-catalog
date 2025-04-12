import { FiChevronRight, FiHome } from 'react-icons/fi';
import styles from './NavHistory.module.scss';
import cn from 'classnames';
import { useNavigate, useParams } from 'react-router-dom';

export const NavHistory = () => {
  const { type, id } = useParams();
  const navigate = useNavigate();

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
          <span className={cn({ [styles.active]: true })}>
            Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
          </span>
        </>
      )}
    </div>
  );
};
