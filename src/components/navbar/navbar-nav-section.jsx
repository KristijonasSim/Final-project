import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import NavbarLink from './navbar-link';
import routes from '../../routing/routes';

const NavbarNavSection = () => {
  const NavbarNavSectionBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  }));

  return (
    <NavbarNavSectionBox sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
      <NavbarLink to={routes.HomePage}>HOMEPAGE</NavbarLink>
      <NavbarLink to={routes.SneakersPage}>SNEAKERS</NavbarLink>
    </NavbarNavSectionBox>
  );
};

export default NavbarNavSection;
