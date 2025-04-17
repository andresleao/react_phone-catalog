import React, { useMemo, useState } from 'react';
import { Product } from 'types/Product';

type ProductsContextType = {
  products: Product[] | null;
  setProducts: React.Dispatch<React.SetStateAction<Product[] | null>>;
  filteredProducts: Product[];
  setFilteredProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  toggleMenu: boolean;
  setToggleMenu: React.Dispatch<React.SetStateAction<boolean>>;
  favouriteAmount: number;
  setFavouriteAmount: React.Dispatch<React.SetStateAction<number>>;
};

export const ProductsContext = React.createContext<ProductsContextType>({
  products: null,
  setProducts: () => {},
  filteredProducts: [],
  setFilteredProducts: () => {},
  toggleMenu: false,
  setToggleMenu: () => {},
  favouriteAmount: 0,
  setFavouriteAmount: () => {},
});

type Props = {
  children: React.ReactNode;
};

export const ProductsProvider: React.FC<Props> = ({ children }) => {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [favouriteAmount, setFavouriteAmount] = useState(0);

  const value = useMemo(
    () => ({
      products,
      setProducts,
      filteredProducts,
      setFilteredProducts,
      toggleMenu,
      setToggleMenu,
      favouriteAmount,
      setFavouriteAmount,
    }),
    [products, filteredProducts, toggleMenu, favouriteAmount],
  );

  // prettier-ignore
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
