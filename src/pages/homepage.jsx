import React from 'react'
import Slider from '../components/slider/slider';
import MensPopularShoesSlider from '../components/advertisement/randoom-shoes/mens-popular-shoes-slider';
import WomensPopularShoesSlider from '../components/advertisement/randoom-shoes/womens-popular-shoes-slider';
import { Box } from '@mui/material';
import DeliveryAdvertisment from '../components/advertisement/delivery-advertisment/delivery-advertisment';
import { styled } from '@mui/material/styles';

const Homepage = () => {


  const MainPagePadding = styled(Box)(({theme}) => ({
    paddingLeft: '40px',
    paddingRight:'40px',
    [theme.breakpoints.down('lg')]: {
      paddingLeft: '24px',
      paddingRight:'24px',
    },
  }));
  

  return (

    <Box>
      <Slider/>
        <MainPagePadding>
        <MensPopularShoesSlider/>
        <WomensPopularShoesSlider/>
        <DeliveryAdvertisment/>
        </MainPagePadding>
    </Box>
  )
}

export default Homepage;
