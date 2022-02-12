import { styled } from '@mui/material/styles';
import React from 'react';



const SmallBox = (props) => {

  const ShoesFilterSmallBox = styled('div')({
    width: '40px',
    height: '40px',
    margin: 5,
    border: '1px solid #E5E5E5',
    textAlign: 'center',
    lineHeight: '38px',
    cursor: 'pointer',
    fontWeight: 400,
    backgroundColor: `${props.bgColor}`
  })

  return (
  <ShoesFilterSmallBox>{props.textInside}</ShoesFilterSmallBox>
  )
}
export default SmallBox;
