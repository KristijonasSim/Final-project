import React from 'react';

import {
  Box,
} from '@mui/material';
import ShoesFilter from '../shoes-filter/shoes-filter';
import ShoesPageGrid from './shoes-page-grid';
import { styled } from '@mui/material/styles';


const ShoesPage = () => {

  const ShoesPageBox = styled(Box)(({theme}) => ({
    display: 'flex',
    justifyContent: 'space-around',
    paddingLeft: '40px',
    paddingRight: '40px',
    [theme.breakpoints.down('lg')]: {
      display: 'Block',
    }
  }))

  
  return (

  <ShoesPageBox sx={{mt:4,}}>
      <Box>
        <ShoesFilter/>
      </Box>
      <Box>
        <ShoesPageGrid />
      </Box>
  </ShoesPageBox>
    );
  }
export default ShoesPage;
