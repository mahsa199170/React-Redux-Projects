import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TO_CART, cartSelector } from './slice/cartSlice';

const Products = () => {
  const [products, setPeoducts] = useState([]);
  const [singleProduct, setSingleProduct] = useState([]);
  const dispatch = useDispatch();
  const cartList = useSelector(cartSelector);

  const url = 'https://fakestoreapi.com/products';

  useEffect(() => {
    fetch(url)
      .then((data) => data.json())
      .then((result) => setPeoducts(result));
  }, []);

  const addToCart = (e) => {
    dispatch(ADD_TO_CART());
  };
  return (
    <div className="row">
      <h1>Product Dashboard</h1>
      {products.map((product) => {
        const { id, title, price, image, category, description } = product;

        return (
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
                <Button onClick={() => addToCart()} variant="primary">
                  Add To Cart
                </Button>
              </Card.Footer>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
