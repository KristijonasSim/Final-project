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
import WideContainer from '../wide-container';


const StyledAppBar = styled(AppBar)(({ theme }) => ({
  color: theme.palette.text.primary,
  background: theme.palette.common.white,
  boxShadow: theme.shadows[0],
  height: 60,
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'stretch',
  [theme.breakpoints.up('sm')]: {
    padding: 0,
  },
}));

const Navbar = () => {


  return (
    <Box sx={{marginBottom: 6}}>
      <StyledAppBar  position="static">
          <WideContainer>
          <StyledToolbar>
          <Box sx={{ display: 'flex', alignItems: 'center', flex: 1, justifyContent: 'left',}}>
                <NavbarCompanySection/>
              </Box>
              <Box sx={{display: 'flex', alignItems: 'center',   flex: 1, justifyContent: 'center',}}>
                 <NavbarNavSection/>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center',  flex: 1, justifyContent: 'end',}}>
                 <NavbarUserSection/>
              </Box>              
            </StyledToolbar>
          </WideContainer>
        </StyledAppBar>
    </Box>
  )
}

export default Navbar
