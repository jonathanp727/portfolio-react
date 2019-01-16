import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

const PortfolioContent = ({ style }) => (
  <div className="portfolio-content" style={style}>
    <h1>Hi, I'm Jonathan</h1>
    <Link to='/portfolio/hackillinois' >Back</Link>
  </div>
);

export default PortfolioContent;