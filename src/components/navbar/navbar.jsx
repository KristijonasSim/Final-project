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
   position: 'fixed',
   marginTop: '30px'
  }));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'stretch',
}));

const Navbar = () => {


  return (
      <StyledAppBar  position="fixed">
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
