import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import { Box } from '@mui/material';
import Annoucment from '../advertisement/annoucment';

const HomePageLayout = ({ children }) => (
  <>
  <Annoucment/>
    <Navbar />
    <Box element="main" sx={{ py: 3 }}>
      <Outlet />
    </Box>
  </>
);

export default HomePageLayout;