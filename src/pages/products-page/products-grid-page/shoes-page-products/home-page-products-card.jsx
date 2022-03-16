import React, { useCallback } from 'react';
import {
  Typography,
  Box,
  styled,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import CardContent from '@mui/material/CardContent';

const CardElement = styled(Card)({
  border: 'none',
  boxShadow: 'none',
  height: '100%',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  objectFit: 'scale-down',
});

const HomePageProductsCard = ({
  id, images, price, size, title,
}) => {
  const navigate = useNavigate();

  const navigateToSingleShoe = useCallback(() => {
    navigate(`/products/${id}`);
  }, [id]);

  return (
    <CardElement>
      <CardMedia
        sx={{ cursor: 'pointer', objectFit: 'cover' }}
        component="img"
        image={images[0]}
        onClick={navigateToSingleShoe}
      />
      <Typography
        sx={{ mt: 1, cursor: 'pointer' }}
        variant="body2"
        color="text.secondary"
      >
        Size:
        {' '}
        {size}
      </Typography>
      <Divider sx={{ mt: 1 }} />

      <CardContent sx={{ p: 0 }}>
        <Typography
          sx={{ fontWeight: 'bold', mt: 1 }}
          variant="body1"
        >
          {title}
        </Typography>
        <Typography
          sx={{ mt: 1 }}
          variant="body2"
          color="text.secondary"
        >
          In warehouse right now
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
          <Typography
            sx={{ fontWeight: 'bold' }}
            variant="body1"
          >
            {price}
            {' '}
            €
          </Typography>
        </Box>
      </CardContent>
    </CardElement>
  );
};

export default HomePageProductsCard;
