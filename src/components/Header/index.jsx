import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

const Header = () => (
  <div className="header">
    <h1>jonathanmp.me</h1>
    <div className='nav'>
      <Link to="/">About</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/portfolio/hackillinois">Hackillinois</Link>
    </div>
  </div>
);

export default Header;
