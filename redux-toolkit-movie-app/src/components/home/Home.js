import React from 'react';
import './Home.scss';
import Movielisting from '../movieListing/Movielisting';

const Home = () => {
  return (
    <div>
      <div className="banner-img">
        <Movielisting />
      </div>
    </div>
  );
};

export default Home;
