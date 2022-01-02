import React from 'react'
import {Box} from '@mui/material';
import { styled } from '@mui/material/styles';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'; 

const NavbarUserSection = () => {



  return (
    <Box sx={{display: 'flex', alignItems: 'center', margin: 4}}>
        <PersonOutlineOutlinedIcon sx={{ fontSize: 40,cursor: 'pointer', fontWeight: 100 }} />
        <ShoppingBagOutlinedIcon sx={{ fontSize: 35, cursor: 'pointer', marginLeft: 2 }} />
    </Box>
  )
}

export default NavbarUserSection


