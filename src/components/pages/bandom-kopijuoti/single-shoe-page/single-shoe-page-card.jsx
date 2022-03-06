import React from 'react'
import { Box, Typography } from '@mui/material';


const SinglShoePageCard = ({ price, title, stock, id}) => {
  return (
    <Box>
      <Typography>{price}</Typography>
      <Typography>{title}</Typography>
      <Typography>{stock}</Typography>
      <Typography>{id}</Typography>

      <Typography variant="h1">Single puslapis</Typography>

    </Box>
  )
}

export default SinglShoePageCard