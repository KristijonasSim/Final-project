import React from 'react'
import {Box} from '@mui/material';
import NavbarNavSectionLink from './navbar-nav-section-link';

const NavbarNavSection = () => {
  return (
    <Box sx={{display: 'flex', gap: 2, alignItems: 'center'}}>
          <NavbarNavSectionLink to="/man-shoes-page">MAN</NavbarNavSectionLink>
           <NavbarNavSectionLink to="/women-shoes-page">WOMAN</NavbarNavSectionLink>

    </Box>
  )
}

export default NavbarNavSection
