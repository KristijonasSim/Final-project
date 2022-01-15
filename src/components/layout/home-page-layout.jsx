import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import { Container } from '@mui/material';
import Annoucment from '../advertisement/annoucment';

const HomePageLayout = ({ children }) => (
  <>
  <Annoucment/>
    <Navbar />
    <Container element="main" sx={{ py: 3 }}>
      <Outlet />
    </Container>
  </>
);

export default HomePageLayout;