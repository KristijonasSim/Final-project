import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductService from '../../../services/product-service';
import SinglShoePageCard from './single-shoe-page-card';

const SingleShoePage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const fetchedProduct = await ProductService.fetchFormatedProduct(id);
      setProduct(fetchedProduct);
      setLoading(false);
    })();
  }, []);

  return (

    <SinglShoePageCard
      id={product.id}
      title={product.title}
      stock={product.stock}
      images={product.images}
      price={product.price}
      loading={loading}
      type={product.type}
      {...product}
    />
  );
};

export default SingleShoePage;
