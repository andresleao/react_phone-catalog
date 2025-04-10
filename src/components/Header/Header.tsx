import styles from './Header.module.scss';
import { Logo } from '../Logo';
import { FiHeart, FiMenu, FiShoppingBag } from 'react-icons/fi';
import { IconButton } from '../IconButton';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.container__content}>
        <Logo />
        <nav className={styles.container__content__menu}>
          {['HOME', 'PHONES', 'TABLETS', 'ACCESSORIES'].map(item => (
            <NavLink
              key={item}
              className={({ isActive }) =>
                isActive
                  ? `${styles.container__content__menu__link_item} active`
                  : styles.container__content__menu__link_item
              }
              to="/"
            >
              {item}
            </NavLink>
          ))}
        </nav>
        <div className={styles.container__content__buttonsArea}>
          <IconButton
            icon={<FiHeart size={24} />}
            useBorder={true}
            borderColor={'#E2E6E9'}
            height={'64px'}
            width={'64px'}
          />
          <IconButton
            icon={<FiShoppingBag size={24} />}
            height={'64px'}
            width={'64px'}
          />
        </div>

        <div className={styles.container__content__menuToggle}>
          <IconButton
            icon={<FiMenu size={24} />}
            useBorder={true}
            height={'64px'}
            width={'64px'}
          />
        </div>
      </div>
    </header>
  );
};
