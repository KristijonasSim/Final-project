import React, { useState, useEffect } from 'react';
import FilterBox from './filter-box';
import { Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {
  Box,
} from '@mui/material';
import Button from '@mui/material/Button';
import ShoesFilterSmallBox from './shoes-filter-small-box';
import APIService from '../../../services/api-service';




const ShoesSize = () => {
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
      <Typography>Shoe Size</Typography>
      <Button><KeyboardArrowDownIcon/></Button>
    </Box>

    <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'start'}}>
    {items.map((item) => (
      <ShoesFilterSmallBox
      key={item.id}
      textInside='45'

      />

      ))}
 



    </Box>
  </FilterBox>
    )
};

export default ShoesSize;
