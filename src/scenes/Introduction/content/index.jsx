import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

const IntroductionContent = ({ style }) => (
  <div className="introduction-content" style={style}>
    <div className="text-cont">
      <h1>Hi I'm</h1>
      <span className="divider"/>
      <h1 className="name">Jonathan Phipps</h1>
    </div>
  </div>
);

export default IntroductionContent;
