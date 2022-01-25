import React from 'react'
import {
  AppBar,
  Box,
  Toolbar,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import NavbarUserSection from './navbar-user-section';
import NavbarNavSection from './navbar-nav-section';
import NavbarCompanySection from './navbar-company-section';


const StyledAppBar = styled(AppBar)(({ theme }) => ({
  color: theme.palette.text.primary,
  background: theme.palette.common.white,
   boxShadow: theme.shadows[2],
  [theme.breakpoints.down('lg')]: {
    display: 'none',
  },

}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'stretch',
  [theme.breakpoints.down('lg')]: {
  },
}));

const Navbar = () => {


  return (
      <StyledAppBar sx={{top:30}} >
          <StyledToolbar sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', }} >
                <NavbarCompanySection/>
              <Box >
                 <NavbarNavSection/>
              </Box>
              <Box >
                 <NavbarUserSection/>
              </Box>              
            </StyledToolbar>
        </StyledAppBar>
  )
}

export default Navbar
