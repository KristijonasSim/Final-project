import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';

import APIService from '../../../services/api-service';

import ShoesPageGridLayout from './shoes-page-grid-layout';
import GridPageCard from './shoes-page grid-card';


const ShoesPageGrid = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    (async () => {
      const fetchedItems = await APIService.fetchedItems();
      setItems(fetchedItems);
    })();
  }, []); 


  return (
    <Box >
      <ShoesPageGridLayout>
        {items.map((item) => (
          <GridPageCard
            key={item.id}
            {...item}
          />
        ))}
      </ShoesPageGridLayout>
    </Box>
  );
};

export default ShoesPageGrid
