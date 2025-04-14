import { createRoot } from 'react-dom/client';
import { App } from './App';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { HomePage } from './modules/HomePage';
import { ProductDetailsPage } from './modules/ProductDetailsPage';
import { ProductsPage } from './modules/ProductsPage';
import { CartPage } from './modules/CartPage';

createRoot(document.getElementById('root') as HTMLElement).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />

        <Route path=":type">
          <Route index element={<ProductsPage />} />
          <Route path=":id" element={<ProductDetailsPage />} />
        </Route>
        <Route path="/cart" element={<CartPage />} />
      </Route>
    </Routes>
  </Router>,
);
