import React from 'react';
import {
  Box,
} from '@mui/material';
import Filters from './home-page-filters';
import Prodcuts from './home-page-products';
import ProductProvider from './contexts/product-context';
import { styled } from '@mui/material/styles';
import HomePageHeader from './home-page-header';
const HomePage = () => {


  const ShoesPageBox = styled(Box)(({theme}) => ({
    display: 'flex',
    paddingLeft: '40px',
    paddingRight: '40px',
    [theme.breakpoints.down('md')]: {
      display: 'Block',
    }
  }))
  return (
      <ProductProvider>
                <HomePageHeader/>

      <ShoesPageBox sx={{mt:4}}>
            <Box>
               <Filters />
            </Box>
            <Box>
               <Prodcuts />
            </Box>
          </ShoesPageBox>
      </ProductProvider>
  );
}
export default HomePage;