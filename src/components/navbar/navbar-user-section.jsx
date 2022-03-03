import React, { useState, useRef } from 'react';

import {
  Box,
  Menu,
  MenuItem,
  Typography,
  Divider,
} from '@mui/material';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'; 
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import StyledLink from './navbar-link'
import routes from '../../routing/routes';
import { useSelector, useDispatch } from 'react-redux';
import { logout, selectAuth } from '../../store/auth';
import { useNavigate } from 'react-router-dom';

const NavbarUserSection = () => {
  const navigate = useNavigate();

  const { loggedIn } = useSelector(selectAuth);

  const dispatch = useDispatch();
  const iconButtonRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => dispatch(logout());

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  


const handleProfileLinkClick = () => {
  handleClose();
  navigate(routes.ProfilePage);
};

  return (
    <Box>
        {
          loggedIn
            ? 
            <><Box sx={{display: 'flex', alignItems: 'center'}}>
            <PersonOutlineOutlinedIcon sx={{fontSize: 36,}}
              size='large'
              onClick={handleOpen}
              color="inherit"
              ref={iconButtonRef}
              cursor='pointer'
            >
              <AccountCircleIcon />
            </PersonOutlineOutlinedIcon>
            <ShoppingBagOutlinedIcon sx={{ fontSize: 33, cursor: 'pointer', marginLeft: 2,}} />
            </Box>
            <Menu
              anchorEl={iconButtonRef.current}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              open={isOpen}
              onClose={handleClose}
            >
                <MenuItem onClick={handleProfileLinkClick} sx={{ display: 'flex', justifyContent: 'space-between', gap: 1, width:200 }}>
                  <Typography textAlign="center">Profile</Typography>
                </MenuItem>
                <Divider />
                <MenuItem  sx={{ display: 'flex', justifyContent: 'space-between', gap: 1 }}>
                  <Typography textAlign="center">My orders</Typography>

                </MenuItem>
                <Divider />
                <MenuItem onClick={handleLogout} sx={{ display: 'flex', justifyContent: 'space-between', gap: 1 }}>
                <Typography textAlign="center">Logout</Typography>

                </MenuItem>
              </Menu></>
            : (
              <Box>
                <StyledLink  to={routes.LoginPage} >LOGIN</StyledLink>

                <StyledLink to={routes.RegisterPage}>REGISTER</StyledLink>
              </Box>
            )
        }
    </Box>
    
  )
}

export default NavbarUserSection


