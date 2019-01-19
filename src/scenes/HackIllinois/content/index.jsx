import React from 'react';
import { Link } from 'react-router-dom';

import logo from './assets/logo.svg';
import clouds from './assets/clouds_stars.svg';
import waveBack from './assets/wave-back.svg';
import waveFront from './assets/wave-front.svg';
import waveMid from './assets/wave-mid.svg';
import './style.scss';

const HackIllinoisContent = ({ style }) => (
  <div className="hackillinois-content" style={style}>
    <div className="sky">
      <div className="cloud-wrapper">
        <img className="clouds" src={clouds} alt="Clouds and Stars" />
      </div>

      <div className="sun-wrapper">
        <div className="sun">
          <img src={logo} alt="HackIllinois Logo" />
          <h1>Make Waves</h1>
          <p>February 22-24</p>
        </div>
      </div>
    </div>

    <div className="water">
      <img className="wave wave-back" src={waveBack} alt="Wave Back" />
      <img className="wave wave-mid" src={waveMid} alt="Wave Middle" />
      <img className="wave wave-front" src={waveFront} alt="Wave Front" />

      <div className="underwater" />
    </div>
  </div>
);

export default HackIllinoisContent;
