import React from 'react';

import './style.scss';

const HackIllinoisInfo = ({ style }) => (
  <div className="hackillinois-info" style={style}>
    <div className="desc-cont">
      <p className="desc">
        Homepage for Hack Illinois 2019. Used by
        hundreds of applicants and participants to find
        out information about the event and apply for a spot.
      </p>
      <p className="desc-2">
        Built by front-end team of 4 in React, animations in
        animejs.  I primarily worked on the registration pages.
      </p>
    </div>
    <a href="https://2019.hackillinois.org" target="_blank">
      <div className="link">
        <span>Visit site</span>
      </div>
    </a>
  </div>
);

export default HackIllinoisInfo;
