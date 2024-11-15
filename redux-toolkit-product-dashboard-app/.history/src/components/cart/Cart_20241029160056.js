import React from 'react';
import { cartSelector } from '../slice/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {
  const cartList = useSelector(cartSelector);
  return <div>i am cart</div>;
};

export default Cart;
