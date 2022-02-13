import React from 'react'
import Slider from '../components/slider/slider';
import MensPopularShoesSlider from '../components/advertisement/randoom-shoes/mens-popular-shoes-slider';
import WomensPopularShoesSlider from '../components/advertisement/randoom-shoes/womens-popular-shoes-slider';
import { Box } from '@mui/material';
import DeliveryAdvertisment from '../components/advertisement/delivery-advertisment/delivery-advertisment';
const Homepage = () => {
  return (

    <Box>
      <Slider/>
      <MensPopularShoesSlider/>
      <WomensPopularShoesSlider/>
      <DeliveryAdvertisment/>
    </Box>
  )
}

export default Homepage;
