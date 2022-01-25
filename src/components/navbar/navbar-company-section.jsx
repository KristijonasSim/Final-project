/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import {Box} from '@mui/material';
import NavbarLink from './navbar-link';
import routes from '../../routing/routes';
const NavbarCompanySection = () => {


// eslint-disable-next-line jsx-a11y/alt-text
  return (
    <Box>
          
          <NavbarLink to={routes.HomePage}><img src={process.env.PUBLIC_URL + "/CompanyLogo.PNG"} width="220" sx={{cursor: 'pointer'}}/></NavbarLink>

    </Box>
  )
}

export default NavbarCompanySection
