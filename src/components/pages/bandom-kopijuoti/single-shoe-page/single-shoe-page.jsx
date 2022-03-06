import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import APIService from '../../../../services/api-service';
import SinglShoePageCard from './single-shoe-page-card'


const SingleShoePage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    (async () => {
      const fetchedProduct = await APIService.fetchFormatedProduct(id);
      setProduct(fetchedProduct);

    })();
  }, []);


  return (
    <SinglShoePageCard
    id={product.id}
    title={product.title}
    price={product.price}
    stock={product.price}
    />
  )
}

export default SingleShoePage