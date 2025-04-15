import './App.scss';
import { Layout } from './layout';
import { ProductsProvider } from 'store/ProductsContext';

export const App = () => (
  <div className="App">
    <ProductsProvider>
      <Layout />
    </ProductsProvider>
  </div>
);
