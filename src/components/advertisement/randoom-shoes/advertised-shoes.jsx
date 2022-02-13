import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import {
  Typography,
} from '@mui/material';
import APIService from '../../../services/api-service';

import ShoesPageGridLayout from '../../pages/shoes-page/shoes-page-grid-layout';
import GridPageCard from '../../pages/shoes-page/shoes-page grid-card';





const AdvertisedShoes = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    (async () => {
      const fetchedItems = await APIService.fetchedItems();
      setItems(fetchedItems);

    })();
  }, []);
  const itemas = items.slice(0, 5)


  return (
    <Box sx={{m:5}}> 
      <Typography>Hiii</Typography>
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