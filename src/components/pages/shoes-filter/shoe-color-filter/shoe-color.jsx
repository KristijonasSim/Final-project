import React, { useState, useEffect } from 'react';
import ShoesFilterSmallBox from '../shoes-filter-small-box';
import {
  Box,
} from '@mui/material';
import APIService from '../../../../services/api-service';



const ShoeColor = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    (async () => {
      const fetchedItems = await APIService.fetchedItems();
      setItems(fetchedItems);
    })();
  }, []); 
  

  return (
    <Box sx={{display: 'flex', flexFlow: 'row wrap'}}>
      {items.map((item) => (
        <ShoesFilterSmallBox
        key={item.id}
        bgColor={item.Color}
        />
      ))}
    </Box>
  );
};

export default ShoeColor;
