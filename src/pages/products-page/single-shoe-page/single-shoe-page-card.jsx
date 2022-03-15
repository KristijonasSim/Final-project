import React, { useState } from 'react';
import {
  Box,
  Typography,
  styled,
  Divider,
  Snackbar,
} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useDispatch } from 'react-redux';
import DoneIcon from '@mui/icons-material/Done';
import SingleShoePageimage from './single-shoe-page-image/single-shoe-page-image';
import { addToCart } from '../../../store/cart';
import CartButton from '../../../components/buttons/cart-button';

const SinglShoePageCard = ({
  price, title, stock, images, loading, id, sex,
}) => {
  const dispatch = useDispatch();
  const [cartNotification, setCartNotification] = useState(false);

  const handleAddToCart = (x) => {
    dispatch(addToCart(x));
    setCartNotification(true);
  };

  const handleCartNotification = () => {
    setCartNotification(false);
  };

  const MainContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    marginTop: '100px',
    justifyContent: 'center',
    paddingLeft: '40px',
    paddingRight: '40px',
    [theme.breakpoints.down('lg')]: {
      display: 'Block',
    },
  }));

  const ImageContainer = styled(Box)(({ theme }) => ({
    display: 'grid',
    gap: theme.spacing(2),
    gridTemplateColumns: 'repeat(2, 1fr)',
  }));

  const InfoContainer = styled(Box)(({ theme }) => ({
    marginLeft: '20px',
    [theme.breakpoints.down('lg')]: {
      marginLeft: '0',
      marginTop: '30px',
    },
  }));

  const StockButton = styled(Box)(({ theme }) => ({
    textDecoration: 'none',
    color: '#00933C',
    height: '48px',
    backgroundColor: '#F4F4F4',
    borderRadius: 0,
    alignItems: 'center',
    textAlign: 'center',
    width: '180px',
    lineHeight: '1.428571429',
    fontWeight: theme.typography.fontWeightBold,
  }));

  return (
    <MainContainer>
      {loading
        ? (
          <Box>
            Loading
          </Box>
        )
        : (
          <ImageContainer>
            {images.map((image) => (
              <SingleShoePageimage
                key={image}
                images={image}
              />
            ))}
          </ImageContainer>
        )}
      <InfoContainer>
        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>{title}</Typography>
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
          €
          {price}
          {' '}
          EUR
        </Typography>
        <Divider sx={{ mt: 2, mb: 2 }} />
        <Typography variant="h6">
          Category:
          {' '}
          {sex}
        </Typography>
        <Divider sx={{ mt: 2, mb: 2 }} />
        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          ContentProps={{
            sx: {
              background: '#E93830',
              mt: 7,
            },
          }}
          open={cartNotification}
          autoHideDuration={5000}
          onClose={handleCartNotification}
          message={`${title} was added to your cart`}
        />

        <Box sx={{ display: 'flex' }}>
          <StockButton sx={{ mr: 1 }}>
            <DoneIcon fontSize="large" />
            WE HAVE IT
          </StockButton>
          <CartButton
            sx={{ height: '48px' }}
            onClick={() => handleAddToCart({
              title, price, images, stock, id,
            })}
          >
            {price}
            {' '}
            EUR
            {' '}
            <ArrowForwardIosIcon />
            {' '}
            ADD TO CART
          </CartButton>
        </Box>
      </InfoContainer>
    </MainContainer>
  );
};
export default SinglShoePageCard;
