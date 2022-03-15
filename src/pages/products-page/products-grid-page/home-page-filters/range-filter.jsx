import React, { useState, useEffect } from 'react';
import {
  Slider,
  Input,
  Box,
  Typography,
} from '@mui/material';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ShoeFilterBox from './shoe-filter-box';

const inputStyle = { p: 0.5, width: 45, textAlign: 'center' };

const RangeFilter = ({
  min,
  max,
  currMin,
  currMax,
  changeFilter,
}) => {
  const [currRange, setCurrRange] = useState([currMin, currMax]);
  const [minInputValue, setMinInputValue] = useState(currMin);
  const [maxInputValue, setMaxInputValue] = useState(currMax);
  const [open, setOpen] = useState(true);

  const handleMinInputValueChange = (e) => {
    const value = Number(e.target.value);
    if (!Number.isNaN(value)) {
      setMinInputValue(value);
    }
  };

  const handleMinInputBlur = () => {
    if (minInputValue >= min && minInputValue <= currMax) {
      changeFilter([minInputValue, currMax]);
    } else {
      setMinInputValue(currMin);
    }
  };

  const handleMaxInputValueChange = (e) => {
    const value = Number(e.target.value);
    if (!Number.isNaN(value)) {
      setMaxInputValue(value);
    }
  };

  const handleMaxInputBlur = () => {
    if (maxInputValue >= currMin && maxInputValue <= max) {
      changeFilter([currMin, maxInputValue]);
    } else {
      setMaxInputValue(currMax);
    }
  };
  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    setCurrRange([currMin, currMax]);
    setMinInputValue(currMin);
    setMaxInputValue(currMax);
  }, [currMin, currMax]);

  return (
    <ShoeFilterBox sx={{ width: '100%', mb: 2 }}>
      <ListItemButton
        sx={{
          '&.active, &:hover, &.active:hover': {
            backgroundColor: 'white',
          },
        }}
        onClick={handleClick}
        disableRipple
      >
        <ListItemText
          disableTypography
          primary={<Typography sx={{ color: 'black', fontWeight: 'bold' }}>Price</Typography>}
        />
        {open ? <ExpandLess /> : <ExpandMore />}

      </ListItemButton>
      <Collapse in={open} timeout="auto">
        <Box sx={{
          display: 'flex', justifyContent: 'center', mb: 1,
        }}
        >
          <Input
            size="large"
            variant="standard"
            inputProps={{ sx: inputStyle }}
            disableUnderline
            value={`${minInputValue} €`}
            onChange={handleMinInputValueChange}
            onBlur={handleMinInputBlur}
          />
          <Box>_</Box>
          <Input
            size="small"
            variant="standard"
            inputProps={{ sx: inputStyle }}
            disableUnderline
            value={`${maxInputValue} €`}
            onChange={handleMaxInputValueChange}
            onBlur={handleMaxInputBlur}
          />
        </Box>
        <Box sx={{ mt: 1, mb: 2, px: 1.5 }}>
          <Slider
            sx={{ mb: 2 }}
            getAriaLabel={() => 'Temperature range'}
            value={currRange}
            valueLabelDisplay="auto"
            min={min}
            max={max}
            onChange={(_, range) => setCurrRange(range)}
            onChangeCommitted={(_, range) => changeFilter(range)}
          />
        </Box>

      </Collapse>
    </ShoeFilterBox>
  );
};

export default RangeFilter;
