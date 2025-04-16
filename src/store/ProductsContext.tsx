import React, { useMemo, useState } from 'react';
import { Product } from 'types/Product';

type ProductsContextType = {
  products: Product[] | null;
  setProducts: React.Dispatch<React.SetStateAction<Product[] | null>>;
  filteredProducts: Product[];
  setFilteredProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  toggleMenu: boolean;
  setToggleMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ProductsContext = React.createContext<ProductsContextType>({
  products: null,
  setProducts: () => {},
  filteredProducts: [],
  setFilteredProducts: () => {},
  toggleMenu: false,
  setToggleMenu: () => {},
});

type Props = {
  children: React.ReactNode;
};

export const ProductsProvider: React.FC<Props> = ({ children }) => {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [toggleMenu, setToggleMenu] = useState(false);

  const value = useMemo(
    () => ({
      products,
      setProducts,
      filteredProducts,
      setFilteredProducts,
      toggleMenu,
      setToggleMenu,
    }),
    [products, filteredProducts, toggleMenu],
  );

  // prettier-ignore
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
