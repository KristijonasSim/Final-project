import React from 'react'
import {Box} from '@mui/material';
import NavbarLink from './navbar-link';
import routes from '../../routing/routes';

const NavbarNavSection = () => {
  return (
    <Box sx={{display: 'flex', gap: 2, alignItems: 'center'}}>
          <NavbarLink to={routes.MensShoesPage}>MAN</NavbarLink>
          <NavbarLink to={routes.WomensShoesPage}>WOMAN</NavbarLink>
          <NavbarLink to={routes.Blog}>BLOG</NavbarLink>

    </Box>
  )
}

export default NavbarNavSection
