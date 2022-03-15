import React, { useState } from 'react';
import {
  Box, Button, OutlinedInput, Divider,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const CartItem = ({ item, onamountChange, onDelete }) => {
  const [input, setInput] = useState(item.amount);

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    onamountChange({ ...item, amount: e.target.value });
  };

  return (
    <Box>
      <Box
        key={item.id}
        sx={{
          display: 'flex', justifyConent: 'space-around', alignItems: 'center',
        }}
      >
        <Box sx={{ mr: 6 }}>
          <img
            style={{
              padding: 0,
              maxHeight: '156px',
              maxWidth: '100%',
              objectFit: 'cover',
            }}
            src={item.images[0]}
            alt={item.title}
          />
        </Box>
        <Box variant="h4" sx={{ fontWeight: 'bold', mr: 3 }}>{item.title}</Box>
        <Box sx={{ mr: 6 }}>
          {' '}
          <OutlinedInput
            style={{ width: '50px' }}
            min="1"
            id="amount"
            name="amount"
            value={input}
            onChange={onChangeHandler}
          />
        </Box>
        <Box sx={{ mr: 6, fontWeight: 'bold' }}>
          {item.price}
          {' '}
          EUR
          {' '}
        </Box>
        <Box>
          <Button onClick={() => onDelete(item.id)}>
            <CloseIcon />
          </Button>
        </Box>
      </Box>
      <Divider sx={{ mt: 3, mb: 3 }} />
    </Box>
  );
};

export default CartItem;
