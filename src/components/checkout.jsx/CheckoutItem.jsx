import React from 'react';
import { Box, Divider } from '@mui/material';

const CartItem = ({ item }) => (
  <>
    <Box
      key={item.id}
      sx={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}
    >
      <Box>
        <img
          style={{
            padding: 0,
            maxHeight: '80px',
            maxWidth: '100%',
            objectFit: 'cover',
            margin: 0,
          }}
          src={item.images[0]}
          alt={item.title}
        />
      </Box>
      <Box sx={{ fontWeight: 'bold' }}>{item.title}</Box>
      <Box>{item.total}</Box>
      <Box sx={{ fontWeight: 'bold' }}>
        {item.price}
        {' '}
        EUR
      </Box>
    </Box>
    <Divider sx={{ mt: 2, mb: 2 }} />

  </>

);

export default CartItem;
