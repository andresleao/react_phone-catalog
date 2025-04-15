import styles from './Header.module.scss';
import { useLocation } from 'react-router-dom';
import { FiHeart, FiMenu, FiShoppingBag } from 'react-icons/fi';
import { Logo } from 'components/Logo';
import { IconButton } from 'components/IconButton';
import { NavLink, useNavigate } from 'react-router-dom';
import { BadgeButton } from 'components/BadgeButton';

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isCartPage = location.pathname === '/cart';
  const isFavouritesPage = location.pathname === '/favourites';

  const links = [
    { label: 'HOME', path: '/' },
    { label: 'PHONES', path: '/phones' },
    { label: 'TABLETS', path: '/tablets' },
    { label: 'ACCESSORIES', path: '/accessories' },
  ];

  return (
    <header className={styles.container}>
      <div className={styles.container__content}>
        <Logo />
        <nav className={styles.container__content__menu}>
          {links.map(item => (
            <NavLink
              key={item.label}
              className={({ isActive }) =>
                `${styles.container__content__menu__link__item} ${
                  isActive ? styles.active : ''
                }`
              }
              to={item.path}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className={styles.container__content__buttonsArea}>
          <BadgeButton
            icon={<FiHeart size={24} />}
            useBorder
            isSelected={isFavouritesPage}
            onClick={() => navigate('/favourites')}
          />
          <BadgeButton
            icon={<FiShoppingBag size={24} />}
            isSelected={isCartPage}
            amount={3}
            onClick={() => navigate('/cart')}
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
