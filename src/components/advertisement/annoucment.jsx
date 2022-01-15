import React from 'react'
import {Box,} from '@mui/material';
import { styled } from '@mui/material/styles';


const Annoucment = () => {

  const Annoucment = styled('div')({
    height:30,
    backgroundColor: '#D32F2F',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
    fontFamily: 'Open Sans'

  })

  return (
    <Box>
      <Annoucment >
      FREE SHIPPING THIS WEEK!!!

      </Annoucment>
    </Box>
  )
}

export default Annoucment

