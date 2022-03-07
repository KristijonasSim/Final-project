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
const OptionsFilter = ({ colorOptions, name, changeFilter }) => {
  const [open, setOpen] = useState(true);


  const handleClick = () => {
    setOpen(!open);
  };


  
 return (
  <ShoeFilterBox name={name}>
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
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto">
      <List component="div">
      <Box sx={{display: 'flex', flexFlow: 'row wrap'}}> {
        colorOptions.map((x) => (
          <FormControlLabel
            key={x.id}
            control={<Checkbox size="small" checked={x.checked}
             sx={{
              backgroundColor: `${x.title}`, 
              borderRadius: 0,
              margin: 1,
              width: '40px',
              height: '40px',
              border: '1px solid #E5E5E5',
              textAlign: 'center',
              lineHeight: '38px',
              cursor: 'pointer',
              fontWeight: 400,
              color: `${x.title}`,
              '&.Mui-checked': {
                color: `${x.title}`,
                border: '2px solid black',
                width: '43px',
                height: '43px'
              },
              "&:hover": {
                backgroundColor: `${x.title}`,
              },
            }}/>}
            label={x.title} sx={{
              '& .MuiFormControlLabel-label':
             {
             display:'none',
             }
             }}
            onChange={(_, checked) => changeFilter({ id: x.id, checked })}
          />
        ))
      }
    </Box>
        </List>
      </Collapse>
  </ShoeFilterBox>
 )};

export default OptionsFilter;
