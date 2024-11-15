import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className="header">
      <Link to="/"></Link>
      <div className="logo"></div>
        <div className="user-image">
          <img src={} alt = "user"/>
        
      </div>
      
    </div>
  )
};

export default Header;
