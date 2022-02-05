import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Button from '@mui/material/Button';

import FilterBox from './filter-box';
import ShoesFilterSmallBox from './shoes-filter-small-box';
import {
  Box,
} from '@mui/material';
import APIService from '../../../services/api-service';



const ShoeColor = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    (async () => {
      const fetchedItems = await APIService.fetchedItems();
      setItems(fetchedItems);
    })();
  }, []); 
  

  return (
    <FilterBox sx={{p:2}}>
    <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
      <Typography>Color</Typography>
      <Button><KeyboardArrowDownIcon/></Button>
    </Box>
    <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'start'}}>
      {items.map((item) => (
        <ShoesFilterSmallBox
        key={item.id}
        bgColor={item.Color}
        />
      ))}



    </Box>
  </FilterBox>    
  );
};

export default ShoeColor;
