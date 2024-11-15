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

      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
};

export default Header;
