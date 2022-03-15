import React from 'react';
import { Box } from '@mui/material';

const SingleShoePageimage = ({ images }) => (
  <Box>
    <img
      src={images}
      alt="#"
      style={{
        flexWrap: 'wrap',
        padding: 0,
        maxHeight: '420px',
        maxWidth: '100%',
        flexGrow: '0',
        flexShrink: '0',
        flexBasis: '50%',
        objectFit: 'cover',
      }}
    />
  </Box>
);

export default SingleShoePageimage;
