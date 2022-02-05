import React from 'react'
import {Box} from '@mui/material';
import NavbarLink from './navbar-link';
import routes from '../../routing/routes';
import { styled } from '@mui/material/styles';

const NavbarNavSection = () => {


  const NavbarNavSectionBox = styled(Box)(({theme}) => ({
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },    
}));

  return (
    <NavbarNavSectionBox sx={{display: 'flex', gap: 2, alignItems: 'center', maxWidth: '1026px'}}>
          <NavbarLink to={routes.MensShoesPage}>MAN</NavbarLink>
          <NavbarLink to={routes.WomensShoesPage}>WOMAN</NavbarLink>
          <NavbarLink to={routes.Blog}>BLOG</NavbarLink>

    </NavbarNavSectionBox>
  )
}

export default NavbarNavSection
