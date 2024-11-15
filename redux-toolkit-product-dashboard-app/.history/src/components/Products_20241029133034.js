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
            <Card style={{ width: '18rem' }}>
              <Card.Img
                variant="top"
                src={image}
                style={{ width: '100px', height: '130px' }}
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
