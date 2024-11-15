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
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          {products.map((product) => {
            const { id, title, price, image, category, description } = product;
            return (
              <>
                {image}
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </>
            );
          })}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Products;
