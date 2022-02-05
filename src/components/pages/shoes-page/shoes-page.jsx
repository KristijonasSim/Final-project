import React from 'react';

import {
  Box,
} from '@mui/material';
import ShoesFilter from '../shoes-filter/shoes-filter';
import ShoesPageGrid from './shoes-page-grid';

const ShoesPage = () => (
  <Box sx={{ px: 2, py: 2, width: '100%', display:'flex', justifyContent: 'center'}}>
      <Box>
        <ShoesFilter/>
      </Box>
      <Box>
        <ShoesPageGrid />
      </Box>
  </Box>
);

export default ShoesPage;
