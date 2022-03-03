import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import ProductService from '../../../services/product-service'
import ShoesPageGridLayout from '../../pages/shoes-page/shoes-page-grid-layout';
import GridPageCard from '../../pages/shoes-page/shoes-page grid-card';





const AdvertisedShoes = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    (async () => {
      const fetchedItems = await ProductService.fetchedItems();
      setItems(fetchedItems);

    })();
  }, []);
  const itemas = items.slice(0, 5)


  return (
    <Box> 
      <ShoesPageGridLayout>
      {itemas.map((item) => (
        <GridPageCard
        key={item.id}
        {...item}/>
      ))}
      </ShoesPageGridLayout>
    </Box>
  )
}

export default AdvertisedShoes