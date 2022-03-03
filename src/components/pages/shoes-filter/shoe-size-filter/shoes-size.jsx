import React, { useState, useEffect } from 'react';

import {
  Box,
} from '@mui/material';
import ShoesFilterSmallBox from '../shoes-filter-small-box';
import APIService from '../../../../services/api-service';

const ShoesSize = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
      (async () => {
        const fetchedItems = await APIService.fetchItems();
        setItems(fetchedItems);
      })();
    }, []); 


  return (
    <Box sx={{display: 'flex', flexFlow: 'row wrap', justifyConent: 'center'}}>
    {items.map((item) => (
      <ShoesFilterSmallBox
      key={item.id}
      textInside={item.Size}
      />
      ))}
    </Box>
    
    )
};  


export default ShoesSize;
