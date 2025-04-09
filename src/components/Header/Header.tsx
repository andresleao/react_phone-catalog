import styles from './Header.module.scss';
import { Logo } from '../Logo';
import { FiHeart, FiShoppingBag } from 'react-icons/fi';
import { IconButton } from '../IconButton';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header className={styles.container}>
      <Logo />
      <div className={styles.container__content}>
        <nav className={styles.container__content__menu}>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${styles.container__content__menu__link_item} active`
                : styles.container__content__menu__link_item
            }
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${styles.container__content__menu__link_item} active`
                : styles.container__content__menu__link_item
            }
            to="/"
          >
            PHONES
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${styles.container__content__menu__link_item} active`
                : styles.container__content__menu__link_item
            }
            to="/"
          >
            TABLETS
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${styles.container__content__menu__link_item} active`
                : styles.container__content__menu__link_item
            }
            to="/"
          >
            ACCESSORIES
          </NavLink>
        </nav>
        <div className={styles.container__content__buttonsArea}>
          <IconButton icon={<FiHeart size={24} />} useBorder={true} />
          <IconButton icon={<FiShoppingBag size={24} />} />
        </div>
      </div>
    </header>
  );
};
