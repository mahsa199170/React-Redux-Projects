import React from 'react';
import { cartSelector } from '../slice/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cart = () => {
  const cartList = useSelector(cartSelector);

  const dispatch = useDispatch();

  const removeFromCart = (id) => {};
  return (
    <div>
      {cartList.map((cart) => {
        const { id, title, price, image } = cart;
        return (
          <div key={id}>
            <div className="col-md-3" style={{ marginBottom: '20px' }} key={id}>
              <Card className="h-100" key={id}>
                <div className="text-center">
                  <Card.Img
                    variant="top"
                    src={image}
                    style={{ width: '100px', height: '130px' }}
                  />
                </div>
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>${price}</Card.Text>
                </Card.Body>
                <Card.Footer style={{ backgroundColor: 'white' }}>
                  <Button onClick={() => removeFromCart(id)} variant="primary">
                    Remove from cart
                  </Button>
                </Card.Footer>
              </Card>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
