import React from 'react';
import { cartSelector } from '../slice/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {
  const cartList = useSelector(cartSelector);

  console.log(cartSelector);
  return <div>{cartList}</div>;
};

export default Cart;