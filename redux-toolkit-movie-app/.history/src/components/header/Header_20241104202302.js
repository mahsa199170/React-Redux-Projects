import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import user from '../../images/user.png';
import notFound from '../../images/pnf.jpg';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        {' '}
        <Link to="/">Movie App </Link>
      </div>
      <div className='search-bar'>
        <form>
          <input type='text' value={} placeholder='Search Movies or Shows' onChange={(e)=>}/>
          <button type='submit'><i className='fa fa-search'></i></button>
        </form>
        
      </div>

      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
};

export default Header;
