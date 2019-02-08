import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

const PortfolioContent = ({ style }) => {
  return (
    <div className="portfolio-content" style={style}>
      <h1 className="title">Portfolio</h1>
    </div>
  );
};

export default PortfolioContent;
