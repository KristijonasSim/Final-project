import React from 'react'
import {Box,  Button} from '@mui/material';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'; 
import StyledLink from './navbar-nav-section-link'
import { LoginRoute, RegisterRoute } from '../../routing/routes';
import { useSelector, useDispatch } from 'react-redux';


import { logoutAction } from '../../store/auth/action-creators';
import { authSelector } from '../../store/auth/selectors'
const NavbarUserSection = () => {

  const auth = useSelector(authSelector);
  const dispatch = useDispatch();
  const handleLogout = () => dispatch(logoutAction);


  return (
    <Box sx={{display: 'flex', alignItems: 'center', margin: 4,}}>
        <PersonOutlineOutlinedIcon sx={{ fontSize: 40,cursor: 'pointer', fontWeight: 100 }}></PersonOutlineOutlinedIcon>
        <Box>
        {
          auth.loggedIn
            ? <Button color="error" variant="contained" sx={{ m: 1 }} onClick={handleLogout}>Logout</Button>
            : (
              <Box>
                <StyledLink  to={LoginRoute.path} >Login</StyledLink>

                <StyledLink to={RegisterRoute.path}>Register</StyledLink>
              </Box>
            )
        }
        </Box>

        <ShoppingBagOutlinedIcon sx={{ fontSize: 35, cursor: 'pointer', marginLeft: 2 }} />
    </Box>
  )
}

export default NavbarUserSection


