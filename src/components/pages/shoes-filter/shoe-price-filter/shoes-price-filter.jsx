import React,  { useState }  from 'react'
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ShoeFilterBox from '../shoe-filter-box';
import RangeField from './range-field';
import { Typography } from '@mui/material';


const initialPriceRange = [ 10.01, 750.01 ];
const [minPrice, maxPrice] = initialPriceRange;


const ShoesPriceFilter = () => {
  const [open, setOpen] = useState(true);
  const [priceRange, setPriceRange] = useState(initialPriceRange);

  const handleClick = () => {
    setOpen(!open);
  };


  return (
    <ShoeFilterBox sx={{ width: '100%', mb:2}}
    >
      <ListItemButton sx={{'&.active, &:hover, &.active:hover': {
        backgroundColor: 'white'
      }}}
      onClick={handleClick}
      disableRipple
      >      
        <ListItemText
        disableTypography
        primary={<Typography sx={{ color: 'black', fontWeight:'bold' }}>Price</Typography>}
      />        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto">
        <List 
        component="div">
          <RangeField
          onChange={(newPrice) => setPriceRange(newPrice)}
          value={priceRange}
          min={minPrice}
          max={maxPrice}
          step={10}
          />
        </List>
      </Collapse>
    </ShoeFilterBox>
  )
}

export default ShoesPriceFilter



