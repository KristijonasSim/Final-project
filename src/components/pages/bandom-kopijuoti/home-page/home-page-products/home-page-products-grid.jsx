import React, { useContext } from 'react';
import Card from './home-page-products-card';
import { ProductContext } from '../contexts/product-context';
import ShoesPageGridLayout from './shoes-page-grid-layout';


const HomePageProductsGrid = () => {
  const { products } = useContext(ProductContext);

  return (
    <ShoesPageGridLayout>
      {products.map((props) => (
          <Card 
          key={props.id}
          {...props} />
      ))}
    </ShoesPageGridLayout>
  );
};

export default HomePageProductsGrid;
