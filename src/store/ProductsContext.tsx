import React, { useMemo, useState } from 'react';

type ProductsContextType = {
  toggleMenu: boolean;
  setToggleMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ProductsContext = React.createContext<ProductsContextType>({
  toggleMenu: false,
  setToggleMenu: () => {},
});

type Props = {
  children: React.ReactNode;
};

export const ProductsProvider: React.FC<Props> = ({ children }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const value = useMemo(
    () => ({
      toggleMenu,
      setToggleMenu,
    }),
    [toggleMenu],
  );

  // prettier-ignore
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
