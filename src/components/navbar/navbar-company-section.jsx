/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Box } from '@mui/material';
import NavbarLink from './navbar-link';
import routes from '../../routing/routes';

const NavbarCompanySection = () => (
  <Box>

    <NavbarLink to={routes.HomePage}><img src={`${process.env.PUBLIC_URL}/CompanyLogo.PNG`} width="180" sx={{ cursor: 'pointer' }} /></NavbarLink>

  </Box>
);
export default NavbarCompanySection;
