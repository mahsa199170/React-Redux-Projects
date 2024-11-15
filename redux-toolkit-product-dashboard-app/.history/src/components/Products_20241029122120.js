import React, { useEffect, useState } from 'react';

const Products = () => {
  const [products, setPeoducts] = useState([]);

  const url = 'https://fakestoreapi.com/products';

  useEffect(() => {
    fetch(url)
      .then((data) => data.json())
      .then((result) => setPeoducts(result));
  }, []);
  return <div>[products]</div>;
};

export default Products;
