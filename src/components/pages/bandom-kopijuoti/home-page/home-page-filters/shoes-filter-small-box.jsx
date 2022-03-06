import { styled } from '@mui/material/styles';
import React from 'react';
import {
  FormControlLabel,
} from '@mui/material';


const SmallBox = (props) => {

  const ShoesFilterSmallBox = styled(FormControlLabel)({
    width: '40px',
    height: '40px',
    margin: 5,
    border: '1px solid #E5E5E5',
    textAlign: 'center',
    lineHeight: '38px',
    cursor: 'pointer',
    fontWeight: 400,
  })

  return (
  <ShoesFilterSmallBox></ShoesFilterSmallBox>
  )
}
export default SmallBox;
