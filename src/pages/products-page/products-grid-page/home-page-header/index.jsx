import React, { useContext } from 'react';
import {
  Typography,
  Box,
  Button,
} from '@mui/material';
import { ProductContext } from '../contexts/product-context';

const HomePageHeader = () => {
  const { categories, selectedCategory, changeCategory } = useContext(ProductContext);
  return (

    <Box sx={{
      display: 'flex', justifyContent: 'center', p: 1, mt: 2,
    }}
    >
      {categories.map(({ id, title }) => (
        <React.Fragment key={title}>
          <Button
            variant="text"
            color={id === selectedCategory ? 'primary' : 'inherit'}
            onClick={() => changeCategory(id)}
          >
            <Typography>{title}</Typography>

          </Button>
        </React.Fragment>
      ))}
    </Box>
  );
};

export default HomePageHeader;
