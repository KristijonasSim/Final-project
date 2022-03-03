import React from 'react';
import { styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';

const StyledLink = styled(NavLink)(({ theme }) => ({
  textDecoration: 'none',
  padding: theme.spacing(0, 1),
  height: '100%',
  alignItems: 'center',
  color: '#464545',
  fontWeight: theme.typography.fontWeightBold,
  fontSize: theme.typography.fontSizeLg,
  ':hover': {
    color: '#E93830',
  },
  '&.active': {
    color: "#E73830",
  },
}));



const NavbarLink = ({ to, children }) => (
  <StyledLink to={to}>
    {children}
  </StyledLink>
);

export default NavbarLink;
