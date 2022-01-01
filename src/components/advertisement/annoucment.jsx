import React from 'react'
import {
  AppBar,
  Box,
  Toolbar,
} from '@mui/material';
import { styled } from '@mui/material/styles';


const Annoucment = () => {

  const Annoucment = styled('div')({
    height:30,
    backgroundColor: '#E73830',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
    margin: 0
  })

  return (
    <Box>
      <Annoucment>

      </Annoucment>
    </Box>
  )
}

export default Annoucment

