import React from 'react';
import {
  Box,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Filters from './home-page-filters';
import Prodcuts from './shoes-page-products';
import ProductProvider from './contexts/product-context';
import HomePageHeader from './home-page-header';

const SneakersPage = () => {
  const ShoesPageBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    paddingLeft: '40px',
    paddingRight: '40px',
    marginTop: 4,
    [theme.breakpoints.down('md')]: {
      display: 'Block',
    },
  }));
  return (
    <ProductProvider>
      <HomePageHeader />
      <ShoesPageBox>
        <Box>
          <Filters />
        </Box>
        <Box>
          <Prodcuts />
        </Box>
      </ShoesPageBox>
    </ProductProvider>
  );
};
export default SneakersPage;
