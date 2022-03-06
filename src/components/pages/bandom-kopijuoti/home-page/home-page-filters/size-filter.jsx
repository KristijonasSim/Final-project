import React, { useState } from 'react';
import {
  Box,
  FormControlLabel,
  List,
  Checkbox,
  
} from '@mui/material';
import ShoeFilterBox from './shoe-filter-box';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Typography } from '@mui/material';

const SizeFilter = ({ sizeOptions, name, changeFilter }) => {
  const [open, setOpen] = useState(true);


  const handleClick = () => {
    setOpen(!open);
  };


  
 return (
  <ShoeFilterBox name={name} sx={{mt: 2}}>
          <ListItemButton sx={{'&.active, &:hover, &.active:hover': {
        backgroundColor: 'white'
      }}}
      onClick={handleClick}
      disableRipple
      >
        <ListItemText
        disableTypography
        primary={<Typography sx={{ color: 'black', fontWeight:'bold' }}>{name}</Typography>}
      />
      <Typography sx={{color:'gray', mr:1}} >
        CM
        </Typography>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto">
      <List component="div">
      <Box sx={{display: 'flex', flexFlow: 'row wrap', justifyConent: 'center',}}> {
        sizeOptions.map((x) => (
          <FormControlLabel
          key={x.id}
          control={<Checkbox size="small" checked={x.checked}
           sx={{
            backgroundColor: 'white', 
            borderRadius: 0,
            margin: 1,
            width: '30px',
            height: '30px',
            border: '2px solid black',
            textAlign: 'center',
            lineHeight: '38px',
            cursor: 'pointer',
            fontWeight: 400,
            color: 'white',
            '&.Mui-checked': {
              color: '#E31238',
            },
          }}/> }
            label={x.title} 
            onChange={(_, checked) => changeFilter({ id: x.id, checked })}
          />
        ))
      }
    </Box>
        </List>
      </Collapse>
  </ShoeFilterBox>
 )};

export default SizeFilter;
