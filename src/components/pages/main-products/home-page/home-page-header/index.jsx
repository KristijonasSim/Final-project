import React, { useContext } from 'react';
import {
  Typography,
  Paper,
  Button,
} from '@mui/material';
import { ProductContext } from '../contexts/product-context';

const HomePageHeader = () => {
  const { categories, selectedCategory, changeCategory } = useContext(ProductContext);



  return (
    <Paper sx={{ display: 'flex', justifyContent: 'space-between', p: 1 }}>
      {categories.map(({ id, title}, i) => (
        <React.Fragment key={title}>
          <Button
            variant="text"
            color={id === selectedCategory ? 'secondary' : 'inherit'}
            onClick={() => changeCategory(id)}
          >
            <Typography>{title}</Typography>
          </Button>
        </React.Fragment>
      ))}
    </Paper>
  );
};

export default HomePageHeader;
