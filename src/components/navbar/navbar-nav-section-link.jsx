import React from 'react';
import { styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';

const StyledLink = styled(NavLink)(({ theme }) => ({
  textDecoration: 'none',
  padding: theme.spacing(0, 1),
  height: '100%',
  alignItems: 'center',
  color: theme.palette.text.secondary,
  fontWeight: theme.typography.fontWeightBold,
  fontSize: theme.typography.fontSizeLg,
  ':hover': {
    color: theme.palette.text.Success,
  },
  '&.active': {
    color: "#E73830",
  },
}));



const NavbarNavSectionLink = ({ to, children }) => (
  <StyledLink to={to}>{children}</StyledLink>
);

export default NavbarNavSectionLink;
