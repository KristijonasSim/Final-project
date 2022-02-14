import React from 'react'
import DeliveryAdvertismentInfo from './delivery-advertisment-info'
import DeliveryAdvertismentImage from './delivery-advertisment-image'
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';



const DeliveryAdvertisment = () => {


  const StyledDeliveryContainer = styled(Box)(({theme}) => ({

}));




  return (
    <StyledDeliveryContainer sx={{display: 'flex', justifyContent: 'center', mt:5, width: '100%',}}>
      <DeliveryAdvertismentInfo/>
      <DeliveryAdvertismentImage/>
    </StyledDeliveryContainer>
  )
}

export default DeliveryAdvertisment 