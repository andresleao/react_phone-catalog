import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import styles from './Layout.module.scss';

export const Layout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <section className={styles.layout__section}>
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};
