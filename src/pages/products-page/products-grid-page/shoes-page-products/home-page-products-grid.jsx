import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Card from './home-page-products-card';

import ShoesPageGridLayout from './shoes-page-grid-layout';

const HomePageProductsGrid = () => {
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    (async () => {
      if (searchParams.get('category')) {
        const fetchedProducts = await ProductService.fetchProducts(searchParams);
        setProducts(fetchedProducts);
      }
    })();
  }, [searchParams]);

  return (
    <ShoesPageGridLayout container spacing={2}>
      {products.map((props) => (
        <Card
          key={props.id}
          {...props}
        />
      ))}
    </ShoesPageGridLayout>

  );
};

export default HomePageProductsGrid;
