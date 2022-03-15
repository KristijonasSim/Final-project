import React from 'react';
import { Box } from '@mui/material';
import DeliveryAdvertismentInfo from './delivery-advertisment-info';
import DeliveryAdvertismentImage from './delivery-advertisment-image';

const DeliveryAdvertisment = () => (
  <Box sx={{
    display: 'flex', justifyContent: 'center', mt: 5, width: '100%',
  }}
  >
    <DeliveryAdvertismentInfo />
    <DeliveryAdvertismentImage />
  </Box>
);

export default DeliveryAdvertisment;
