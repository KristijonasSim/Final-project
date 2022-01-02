import React from 'react'
import {Box} from '@mui/material';
import { styled } from '@mui/material/styles';
import NavbarNavSectionLink from './navbar-nav-section-link';
const NavbarCompanySection = () => {

  
  return (
    <Box sx={{margin: 4}}>
          
          <NavbarNavSectionLink to="/"><img src={process.env.PUBLIC_URL + "/CompanyLogo.PNG"} width="300" sx={{cursor: 'pointer'}}/></NavbarNavSectionLink>

    </Box>
  )
}

export default NavbarCompanySection
