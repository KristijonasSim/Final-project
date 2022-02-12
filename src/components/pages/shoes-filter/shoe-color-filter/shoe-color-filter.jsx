import React, { useState } from 'react';
import ShoeColor from './shoe-color'
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ShoeFilterBox from '../shoe-filter-box'
import { Typography } from '@mui/material';

const ShoeColorFilter = () => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };



  return (
    <ShoeFilterBox
      sx={{ width: '100%', mb:2}}
    >
      <ListItemButton sx={{'&.active, &:hover, &.active:hover': {
        backgroundColor: 'white'
      }}}
      onClick={handleClick}
      disableRipple
      >
        <ListItemText
        disableTypography
        primary={<Typography sx={{ color: 'black', fontWeight:'bold' }}>Colors</Typography>}
      />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto">
        <List component="div">
            <ShoeColor />
        </List>
      </Collapse>
    </ShoeFilterBox>
  )
};

export default ShoeColorFilter