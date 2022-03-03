import React, { createContext, useMemo } from 'react';
import useProducts from './use-products';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const products = useProducts();

  const contextValue = useMemo(() => ({
    products,
  }), [ products]);

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
