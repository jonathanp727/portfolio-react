import React from 'react';
import { Link } from 'react-router-dom';

import DropDownMenu from 'components/DropDownMenu';

import './style.scss';

const portfolioMenuItems = [
  'Hack Illinois',
  'Jisho History',
  'The Harvest',
  'Flashcards',
];

const Header = () => (
  <div className="header">
    <Link to='/' style={{ color: 'black', textDecoration: 'none' }}>
      <h1>jonathanmp.me</h1>
    </Link>
    <div className="nav">
      <Link to='/' className="link">About</Link>
      <DropDownMenu
        buttonText="Portfolio"
        buttonClass="link"
        buttonLink="/portfolio"
        items={portfolioMenuItems}
      />
    </div>
  </div>
);

export default Header;
