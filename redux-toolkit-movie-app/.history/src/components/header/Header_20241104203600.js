import React, { useState } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import user from '../../images/user.png';
import notFound from '../../images/pnf.jpg';
import { useDispatch } from 'react-redux';
import { fetchMovies, fetchShows } from '../../features/movieSlice';

const Header = () => {
  const [result, setResult] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    setResult('');
    dispatch(fetchMovies(result));
    dispatch(fetchShows(result));
  };
  return (
    <div className="header">
      <div className="logo">
        {' '}
        <Link to="/">Movie App </Link>
      </div>
      <div className="search-bar">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={result}
            placeholder="Search Movies or Shows"
            onChange={(e) => setResult(e.target.value)}
          />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>

      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
};

export default Header;
