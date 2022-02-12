import React from 'react'
import { styled } from '@mui/material/styles';


const Annoucment = () => {

  const Annoucment = styled('div')({
    display: 'flex',
    top: 0,
    height:30,
    width: "100%",
    backgroundColor: 'black',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
    fontFamily: 'Open Sans',
    position:'fixed',
    zIndex: 2
  })

  return (
      <Annoucment >
      FREE SHIPPING THIS WEEK !!!

      </Annoucment>
  )
}

export default Annoucment

