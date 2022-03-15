import React from 'react';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const ButtonMore = styled(Link)(({ theme }) => ({
  display: 'flex',
  textDecoration: 'none',
  color: '#464545',
  border: '1px solid black',
  borderRadius: 0,
  padding: '7px 25px 5px ',
  height: '100%',
  alignItems: 'center',
  lineHeight: '1.428571429',
  fontWeight: theme.typography.fontWeightBold,
  fontSize: theme.typography.fontSize,
  fontFamily: theme.typography.fontFamily,
  ':hover': {
    backgroundColor: '#E93830',
    color: 'white',
    border: '1px solid transparent',
  },
}));

const MainButtonLink = ({ to, children }) => (
  <ButtonMore to={to}>
    {children}
  </ButtonMore>
);

export default MainButtonLink;
