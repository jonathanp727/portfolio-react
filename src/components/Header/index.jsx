import React from 'react';
import { Link } from 'react-router-dom';

import DropDownMenu from 'components/DropDownMenu';

import './style.scss';

const portfolioMenuItems = [
  // {
  //   text: 'Hack Illinois',
  //   to: '/portfolio/hackillinois',
  //   key: 0,
  // },
  // {
  //   text: 'Jisho History',
  //   to: '/portfolio/hackillinois',
  //   key: 1,
  // },
  // {
  //   text: 'Flashcard App',
  //   to: '/portfolio/hackillinois',
  //   key: 2,
  // },
  'hackllinois',
  'jishohistory',
  'frank',
];

const Header = () => (
  <div className="header">
    <h1>jonathanmp.me</h1>
    <div className="nav">
      <DropDownMenu buttonText="Portfolio" items={portfolioMenuItems} />
    </div>
  </div>
);

export default Header;
