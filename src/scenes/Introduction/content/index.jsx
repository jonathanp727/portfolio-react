import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

const IntroductionContent = ({ style }) => (
  <div className="introduction-content" style={style}>
    <h1>Hi, I'm Jonathan</h1>
    <Link to='/portfolio'>-></Link>
  </div>
);

export default IntroductionContent;
