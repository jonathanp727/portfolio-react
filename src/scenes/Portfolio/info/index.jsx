import React from 'react';

import './style.scss';

const Info = ({ style }) => (
  <div className="portfolio-info" style={style}>
    <p>
      My most recent projects.  Unless otherwise stated, they were
      done on my own and outside of class.
    </p>
    <a href="http://jonathanmp.me/JonathanPhipps.pdf" target="_blank">View resume</a>
  </div>
);

export default Info;
