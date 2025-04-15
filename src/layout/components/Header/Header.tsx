import styles from './Header.module.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { FiHeart, FiMenu, FiShoppingBag } from 'react-icons/fi';
import { Logo } from 'components/Logo';
import { IconButton } from 'components/IconButton';
import { BadgeButton } from 'components/BadgeButton';
import { useMediaQuery } from 'react-responsive';
import { ProductsContext } from 'store/ProductsContext';
import { useContext } from 'react';

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isTablet = useMediaQuery({ maxWidth: 1199 });

  const isCartPage = location.pathname === '/cart';
  const isFavouritesPage = location.pathname === '/favourites';

  const { setToggleMenu } = useContext(ProductsContext);

  const handleToggleMenu = () => {
    setToggleMenu(prev => !prev);
  };

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
            icon={<FiHeart size={isTablet ? 16 : 24} />}
            useBorder
            isSelected={isFavouritesPage}
            height={isTablet ? '48px' : '64px'}
            width={isTablet ? '48px' : '64px'}
            onClick={() => navigate('/favourites')}
          />
          <BadgeButton
            icon={<FiShoppingBag size={isTablet ? 16 : 24} />}
            isSelected={isCartPage}
            amount={3}
            onClick={() => navigate('/cart')}
            height={isTablet ? '48px' : '64px'}
            width={isTablet ? '48px' : '64px'}
          />
        </div>

        <div className={styles.container__content__menuToggle}>
          <IconButton
            icon={<FiMenu size={isTablet ? 16 : 24} />}
            useBorder={true}
            height={isTablet ? '48px' : '64px'}
            width={isTablet ? '48px' : '64px'}
            onClick={handleToggleMenu}
          />
        </div>
      </div>
    </header>
  );
};
