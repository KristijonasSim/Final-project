import React from 'react'
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';



const StyledImageBox = styled(Box)(({theme}) => ({
  [theme.breakpoints.down('lg')]: {
    display: 'none'
  }
}));



const DeliveryAdvertismentImage = () => {
  return (
    <StyledImageBox
    component="img"
    sx={{
      padding: 0,
      height:'473px',
      width: '593px',
      maxWidth: '75%',
      objectFit: 'cover'
    }}
    alt="The house from the offer."
    src="https://media.istockphoto.com/photos/stylish-couple-in-city-picture-id871764548?k=20&m=871764548&s=612x612&w=0&h=VT2YIND43wqwWuzfoXXBi510LZdv0YvbrTpZAkMYZlQ="
  />
  )
}

export default DeliveryAdvertismentImage