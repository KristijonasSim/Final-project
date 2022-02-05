import React from 'react';

import ShoesSize from './shoes-size';
import ShoeColor from './shoe-color';
import { Box } from '@mui/material';


const ShoesFilter = () => {


  return (
    <Box>
      <ShoesSize/>
      <ShoeColor/>
    </Box>
  )
  
};

export default ShoesFilter;

