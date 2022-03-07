import React from 'react'
import {
  Box,
  Slider,
} from '@mui/material';
import RangeFieldInput from './range-field-input'


const RangeField = ({
  onChange, value, ...sliderProps
 }) => {
    const [ selectedMin, selectedMax ] = value;
  

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems:'right',
    width:'150px'}}>
        <RangeFieldInput
          value={selectedMin + ' € - '}
          onChange={(e) => onChange([Number(e.target.value), selectedMax])}
        />
        <RangeFieldInput
          value={selectedMax + ' €'}
          onChange={(e) => onChange([selectedMin, Number(e.target.value)])}
        />
      </Box>
      <Box sx={{ mt: 1, mb: 2, px: 1.5 }}>
        <Slider sx={{color: 'black', height: '1px',}}
          {...sliderProps}
          value={value}
          onChange={(_, newValue) => onChange(newValue)}
          valueLabelDisplay="auto"
        />
      </Box>
    </Box>
  );
};


export default RangeField