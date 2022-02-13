import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import { Box } from '@mui/material';
import Annoucment from '../advertisement/announcment/annoucment'
const PageLayout = () => (
  <>
    <Annoucment/>
    <Navbar/>
    <Box element="main" sx={{py: 8}}>
      <Outlet />
    </Box>

  </>
);

export default PageLayout;