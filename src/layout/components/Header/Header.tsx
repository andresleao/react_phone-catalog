import styles from './Header.module.scss';
import { Logo } from '../../../components/Logo';
import { FiHeart, FiMenu, FiShoppingBag } from 'react-icons/fi';
import { IconButton } from '../../../components/IconButton';
import { NavLink, useNavigate } from 'react-router-dom';
import { BadgeButton } from '../../../components/BadgeButton';

export const Header = () => {
  const navigate = useNavigate();

  const links = [
    { label: 'HOME', path: '/' },
    { label: 'PHONES', path: '/phones' },
    { label: 'TABLETS', path: '/tablets' },
    { label: 'ACCESSORIES', path: '/accessories' },
  ];

  const handleNavToCartPage = () => {
    navigate('/cart');
  };

  return (
    <header className={styles.container}>
      <button onClick={handleNavToCartPage}>OPAAAAA</button>
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
          <BadgeButton icon={<FiHeart size={24} />} useBorder />
          <BadgeButton
            icon={<FiShoppingBag size={24} />}
            isSelected={true}
            amount={3}
            onClick={handleNavToCartPage}
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
