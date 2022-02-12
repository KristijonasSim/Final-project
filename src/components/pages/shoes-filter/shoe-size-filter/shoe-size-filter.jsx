import React, { useState } from 'react';
import ShoeSize from './shoes-size'
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ShoeFilterBox from '../shoe-filter-box';
import { Typography } from '@mui/material';


const ShoeSizeFilter = () => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <ShoeFilterBox
      sx={{ width: '100%', mb:2 }}
    >
      <ListItemButton sx={{'&.active, &:hover, &.active:hover': {
        backgroundColor: 'white'
      }}}
      onClick={handleClick}
      disableRipple
      >
        <ListItemText
        disableTypography
        primary={<Typography sx={{ color: 'black', fontWeight:'bold' }}>Sizes</Typography>}
      />
      <Typography sx={{color:'gray', mr:1}} >
        CM
        </Typography>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto">
        <List component="div">
            <ShoeSize />
        </List>
      </Collapse>
    </ShoeFilterBox>
  )
};

export default ShoeSizeFilter