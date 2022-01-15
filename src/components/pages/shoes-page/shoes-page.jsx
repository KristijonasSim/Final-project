import React from 'react';

import {
  Box,
} from '@mui/material';

import ShoesPageGrid from './shoes-page-grid';

const ShoesPage = () => (
  <Box sx={{ px: 2, py: 2, width: '100%' }}>
      <Box item xs={10}>
        <ShoesPageGrid />
      </Box>
  </Box>
);

export default ShoesPage;
