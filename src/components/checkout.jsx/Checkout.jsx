import React, { useEffect, useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Typography,
  Snackbar,
  styled,
  Box,
} from '@mui/material';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { selectCart } from '../../store/cart';
import { selectAuth } from '../../store/auth';
import CheckoutItem from './CheckoutItem';
import ProductService from '../../services/product-service';

const Checkout = () => {
  const [totalPrice, setTotalPrice] = useState(0);

  const { cart } = useSelector(selectCart);
  const { user } = useSelector(selectAuth);

  const [openNotification, setOpenNotification] = useState(false);

  const handleClose = () => {
    setOpenNotification(false);
  };

  const navigate = useNavigate();

  const navigateToSneakers = useCallback(() => {
    navigate('/sneakers');
  }, [navigate]);

  const calculateTotalSum = (items) => {
    let price = 0;
    items.forEach((x) => {
      const itemPrice = x.price.replace(' EUR', '');
      price += parseFloat(itemPrice) * x.qty;
    });

    return price;
  };

  const handleBuy = () => {
    let price = 0;
    let qty = 0;
    cart.forEach((x) => {
      const itemPrice = x.price.replace(' EUR', '');
      price += parseFloat(itemPrice) * x.qty;
      qty += x.qty;
    });

    ProductService.addOrder({
      qty,
      totalAmount: price,
      status: 'COMPLETED',
      userId: user.id,
    });

    setOpenNotification(true);
    setTimeout(() => {
      navigateToSneakers();
    }, 3000);
  };

  useEffect(() => {
    setTotalPrice(calculateTotalSum(cart));
  }, [cart]);

  const OrderContainer = styled(Box)(({ theme }) => ({
    marginTop: '100px',
    border: '1px solid #E5E5E5',
    boxSizing: 'border-box',
    padding: '30px 16px',
    width: '50%',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      marginBottom: '50px',
    },
  }));

  return (
    <Box sx={{
      paddingLeft: '40px',
      paddingRight: '40px',
      display: 'flex',
      justifyContent: 'center',
    }}
    >
      <OrderContainer>
        <Box sx={{ display: 'flex', mb: 2 }}>
          <ShoppingBagOutlinedIcon fontSize="large" sx={{ backgroundColor: '#E31238', color: 'white', padding: '4px' }} />
          <Typography variant="h5" sx={{ fontWeight: 'bold', ml: 1 }}>Your items</Typography>
        </Box>
        <Box sx={{ minWidth: 650 }} aria-label="simple table">
          <Box>
            {cart.map((row) => (
              <CheckoutItem item={row} key={row} />
            ))}
          </Box>
        </Box>

        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          ContentProps={{
            sx: {
              background: '#E93830',
              mt: 7,
            },
          }}
          open={openNotification}
          autoHideDuration={4000}
          onClose={handleClose}
          message="Your order is being prepared !"

        />
        <Box sx={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2,
        }}
        >
          <Button
            variant="contained"
            sx={{ width: 150, height: 50, mb: '20px' }}
            onClick={() => handleBuy()}
          >
            ORDER
          </Button>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            TOTAL PRICE:
            {' '}
            {totalPrice.toFixed(2)}
          </Typography>
        </Box>
      </OrderContainer>
    </Box>
  );
};

export default Checkout;
