import React from 'react';

import './style.scss';

const Info = ({ style }) => (
  <div className="introduction-info" style={style}>
    <div className="intro">
      <p>
        I am an aspiring software developer with experience
        in both front and back end web development. I enjoy
        learning about the all the technologies and techniques
        currently being used in the industry and applying them
        to my own projects. I have also recently gained an
        interest in the design process. When I’m not coding,
        I spend my time learning languages and playing the piano.
      </p>
    </div>
    <div className="proficiencies-cont">
      <ul>
        <li>
          <span className="proficiency-label">React</span>
          <svg>
            <rect className="border-rect"></rect>
            <rect className="fill-rect" id="fill-rect-1"></rect>
          </svg>
        </li>
        <li>
          <span className="proficiency-label">Node.js</span>
          <svg>
            <rect className="border-rect"></rect>
            <rect className="fill-rect" id="fill-rect-2"></rect>
          </svg>
        </li>
        <li>
          <span className="proficiency-label">HTML/CSS</span>
          <svg>
            <rect className="border-rect"></rect>
            <rect className="fill-rect" id="fill-rect-3"></rect>
          </svg>
        </li>
        <li>
          <span className="proficiency-label">jQuery</span>
          <svg>
            <rect className="border-rect"></rect>
            <rect className="fill-rect" id="fill-rect-4"></rect>
          </svg>
        </li>
        <li>
          <span className="proficiency-label">Mongodb</span>
          <svg>
            <rect className="border-rect"></rect>
            <rect className="fill-rect" id="fill-rect-5"></rect>
          </svg>
        </li>
        <li>
          <span className="proficiency-label">MySql</span>
          <svg>
            <rect className="border-rect"></rect>
            <rect className="fill-rect" id="fill-rect-6"></rect>
          </svg>
        </li>
      </ul>
    </div>
  </div>
);

export default Info;
