import React from 'react';
import { cartSelector } from '../slice/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {
  const cartList = useSelector(cartSelector);

  console.log(cartSelector);
  return (
    <div>
      {cartList.map((cart) => {
        const { id, title, price } = cart;
        return <div key={id}></div>;
      })}
    </div>
  );
};

export default Cart;
