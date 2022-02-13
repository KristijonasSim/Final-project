import React from 'react'
import DeliveryAdvertismentInfo from './delivery-advertisment-info'
import DeliveryAdvertismentImage from './delivery-advertisment-image'
import { Box } from '@mui/material';

const DeliveryAdvertisment = () => {
  return (
    <Box sx={{display: 'flex', justifyContent: 'center', mt: 5}}>
      <DeliveryAdvertismentInfo/>
      <DeliveryAdvertismentImage/>
    </Box>
  )
}

export default DeliveryAdvertisment 