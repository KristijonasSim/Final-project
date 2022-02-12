import React from 'react';

import ShoeSizeFilter from './shoe-size-filter/shoe-size-filter';
import ShoeColorFilter from './shoe-color-filter/shoe-color-filter';
import ShoesPriceFilter from './shoe-price-filter/shoes-price-filter';
import {
  Box,
} from '@mui/material';

const ShoesFilter = () => {


  return (
      <Box sx={{margin: '10px', }}>
      <ShoeSizeFilter/>
      <ShoeColorFilter/>
      <ShoesPriceFilter/>
      </Box> 
    
  )
  
};

export default ShoesFilter;

