import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from '../navbar/navbar';
import Annoucment from '../advertisement/announcment/annoucment';
import Footer from '../footer/footer';

const PageLayout = () => (
  <>
    <Annoucment />
    <Navbar />
    <Box element="main" sx={{ py: 8, mb: 1 }}>
      <Outlet />
    </Box>
    <Footer />
  </>
);

export default PageLayout;
