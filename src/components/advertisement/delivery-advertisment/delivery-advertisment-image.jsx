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
      height: '473px',
      maxWidth: '50%',
      objectFit: 'cover',
      display: 'block',
      flexGrow: '0',
      flexShrink: '0',
      flexBasis: '50%'
    }}
    alt="The house from the offer."
    src="https://www.sil.lt/media/nike-2020-day-of-the-dead-collection-4_99500.jpg"
  />
  )
}
export default DeliveryAdvertismentImage