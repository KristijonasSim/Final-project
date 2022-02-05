import React from 'react'
import {Box,  Button} from '@mui/material';

import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'; 

import StyledLink from './navbar-link'
import routes from '../../routing/routes';

import { useSelector, useDispatch } from 'react-redux';
import { logout, selectAuth } from '../../store/auth';


const NavbarUserSection = () => {

  const { loggedIn } = useSelector(selectAuth);
  const dispatch = useDispatch();
  const handleLogout = () => dispatch(logout());



  return (
    <Box sx={{display: 'flex', alignItems: 'center', }}>
        <PersonOutlineOutlinedIcon sx={{ fontSize: 40,cursor: 'pointer', fontWeight: 100 }}></PersonOutlineOutlinedIcon>
        <Box>
        {
          loggedIn
            ? <Button color="error" variant="contained" sx={{ m: 1 }} onClick={handleLogout}>LOGOUT</Button>
            : (
              <Box>
                <StyledLink  to={routes.LoginPage} >LOGIN</StyledLink>

                <StyledLink to={routes.RegisterPage}>REGISTER</StyledLink>
              </Box>
            )
        }
        </Box>

        <ShoppingBagOutlinedIcon sx={{ fontSize: 35, cursor: 'pointer', marginLeft: 2 }} />
    </Box>
  )
}

export default NavbarUserSection


