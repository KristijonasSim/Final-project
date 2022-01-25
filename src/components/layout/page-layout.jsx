import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import { Box } from '@mui/material';
import Annoucment from '../advertisement/annoucment';

const PageLayout = ({ children }) => (
  <>
  <Annoucment/>
    <Navbar />
    <Box element="main" sx={{marginTop:'123px'}}>
      <Outlet />
    </Box>
  </>
);

export default PageLayout;