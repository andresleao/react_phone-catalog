import styles from './Layout.module.scss';
import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FullScreenMenu } from './components/FullScreenMenu/FullScreenMenu';
import { ProductsContext } from 'store/ProductsContext';
import { useMediaQuery } from 'react-responsive';

export const Layout = () => {
  const { toggleMenu } = useContext(ProductsContext);
  const isMobile = useMediaQuery({ maxWidth: 639 });

  return (
    <>
      <div className={styles.layout}>
        <Header />
        <section className={styles.layout__section}>
          <Outlet />
        </section>
        <Footer />
      </div>
      {toggleMenu && isMobile && <FullScreenMenu />}
    </>
  );
};
