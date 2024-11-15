import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Products = () => {
  const [products, setPeoducts] = useState([]);

  const url = 'https://fakestoreapi.com/products';

  useEffect(() => {
    fetch(url)
      .then((data) => data.json())
      .then((result) => setPeoducts(result));
  }, []);
  return (
    <div className="row">
      <h1>Product Dashboard</h1>
      {products.map((product) => {
        const { id, title, price, image, category, description } = product;

        return (
          <div className="col-md-3">
            <Card className="h-10" key={id}>
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
                <Button variant="primary">Add To Cart</Button>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
