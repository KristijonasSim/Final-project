import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Slider from '../../components/slider/slider';
import PopularSneakersSlider from '../../components/advertisement/random-shoe/popular-sneakers-slider';
import DeliveryAdvertisment from '../../components/advertisement/delivery-advertisment/delivery-advertisment';
import ProductProvider from '../products-page/products-grid-page/contexts/product-context';

const Homepage = () => {
  const MainPagePadding = styled(Box)(({ theme }) => ({
    paddingLeft: '40px',
    paddingRight: '40px',
    [theme.breakpoints.down('lg')]: {
      paddingLeft: '24px',
      paddingRight: '24px',
    },
  }));
  return (

    <Box>
      <Slider />
      <MainPagePadding>
        <ProductProvider>
          <PopularSneakersSlider />
          <DeliveryAdvertisment />
        </ProductProvider>
      </MainPagePadding>
    </Box>
  );
};

export default Homepage;
