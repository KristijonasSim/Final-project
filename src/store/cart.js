/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  currentItem: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, { payload }) {
      const primaryCart = state.cart.find((item) => (item.id === payload.id));
      state.cart = primaryCart
        ? state.cart.map((item) => (item.id === payload.id
          ? { ...item, amount: item.amount + 1 }
          : item))
        : [...state.cart, { ...payload, amount: 1 }];
    },
    removeFromCart(state, { payload }) {
      state.cart = state.cart.filter((item) => item.id !== payload);
    },
    adjustamount(state, { payload }) {
      state.cart = state.cart.map((item) => (
        item.id === payload.id ? { ...item, amount: +payload.amount } : item));
    },
  },
});

export const { addToCart, removeFromCart, adjustamount } = cartSlice.actions;

export const selectCart = (state) => state.cart;

export default cartSlice.reducer;
