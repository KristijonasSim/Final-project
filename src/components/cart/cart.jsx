import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  Typography,
  Box,
  styled,
  Divider,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import CartButton from '../buttons/cart-button';
import CartItem from './cartItem';
import { removeFromCart, adjustamount, selectCart } from '../../store/cart';

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const { cart } = useSelector(selectCart);
  const navigate = useNavigate();
  const navigateToCheckout = () => navigate('/checkout');

  const dispatch = useDispatch();
  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  const calculateTotalSum = (items) => {
    let price = 0;
    items.forEach((x) => {
      const itemPrice = x.price.replace(' EUR', '');
      price += parseFloat(itemPrice) * x.amount;
    });

    return price;
  };
  const handleamountChange = (item) => {
    dispatch(adjustamount(item));
  };

  useEffect(() => {
    setTotalPrice(calculateTotalSum(cart));
  }, [cart]);

  const CartContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    marginTop: '100px',
    justifyContent: 'center',
    paddingLeft: '40px',
    paddingRight: '40px',
    [theme.breakpoints.down('lg')]: {
      display: 'Block',
    },
  }));

  const ProductContainer = styled(Box)(({ theme }) => ({
    border: '1px solid #E5E5E5',
    boxSizing: 'border-box',
    padding: '30px 16px',
    width: '50%',
    [theme.breakpoints.down('lg')]: {
      width: '100%',
      marginBottom: '50px',
    },
  }));

  const PriceContainer = styled(Box)(({ theme }) => ({
    border: '1px solid #E5E5E5',
    boxSizing: 'border-box',
    padding: '30px 16px',
    width: '20%',
    maxHeight: '300px',
    marginLeft: '20px',
    [theme.breakpoints.down('lg')]: {
      width: '100%',
      margin: '0',
    },
  }));
  return (
    <CartContainer>
      <ProductContainer sx={{ minWidth: 650 }} aria-label="simple table">
        <Box sx={{ display: 'flex' }}>
          <ShoppingBagOutlinedIcon fontSize="large" sx={{ backgroundColor: '#E31238', color: 'white', padding: '4px' }} />
          <Typography variant="h5" sx={{ fontWeight: 'bold', ml: 1 }}>Cart items</Typography>
        </Box>
        <Divider sx={{ mt: 2, mb: 2 }} />
        <Box>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onDelete={handleRemoveFromCart}
              onamountChange={handleamountChange}
            />
          ))}
        </Box>
      </ProductContainer>
      <PriceContainer>
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Summary</Typography>
        <Divider sx={{ mt: 2, mb: 2 }} />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
          <Box>Order total</Box>
          <Box sx={{ marginLeft: '50px' }}>
            {totalPrice.toFixed(2)}
            {' '}
            EUR
          </Box>
        </Box>
        <Divider sx={{ mt: 2, mb: 2 }} />
        <CartButton
          variant="contained"
          sx={{
            width: '100%', height: 50, m: '20px 0',
          }}
          onClick={navigateToCheckout}
        >
          PROCEED TO CHECKOUT
        </CartButton>
      </PriceContainer>
    </CartContainer>
  );
};

export default Cart;
