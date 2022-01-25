import React from 'react'
import { styled } from '@mui/material/styles';


const Annoucment = () => {

  const Annoucment = styled('div')({
    display: 'flex',
    top:0,
    zIndex:'10',
    height:30,
    width: "100%",
    backgroundColor: '#D32F2F',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
    fontFamily: 'Open Sans',position:'fixed',
  })

  return (
      <Annoucment >
      FREE SHIPPING THIS WEEK!!!

      </Annoucment>
  )
}

export default Annoucment

