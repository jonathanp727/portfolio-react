import React from 'react';

import './style.scss';

const Info = ({ style }) => (
  <div className="portfolio-info" style={style}>
    <p>
      My most recent projects.  Unless otherwise stated, they were
      done on my own and outside of class.  Disclaimer: The visuals
      on this site ARE NOT the actual app.
    </p>
    <a href="/assets/JonathanPhipps.pdf" target="_blank">View resume</a>
  </div>
);

export default Info;
