import React from 'react';
import { Spring } from 'react-spring';

import './style.scss';
const notFirefox = typeof InstallTrigger === 'undefined';

const Info = ({ style, resting }) => (
  <div className="introduction-info" style={style}>
    <div className="intro">
      <p>
        I am an aspiring software developer with experience
        in both front and back end web development. I enjoy
        learning about the all the technologies and techniques
        currently being used in the industry and applying them
        to my own projects. When I’m not coding, I spend my time
        learning languages and playing the piano.
      </p>
    </div>
    { notFirefox && 
      <div className="proficiencies-cont">
        <ul>
          <li>
            <span className="proficiency-label">React</span>
            <svg>
              <rect className="border-rect"></rect>
              { resting &&
                <Spring
                  from={{ width: '0%' }}
                  to={{ width: '85%' }}>
                  { 
                    style =>
                      <rect className="fill-rect" style={style}></rect>
                  }
                </Spring>
              }
            </svg>
          </li>
          <li>
            <span className="proficiency-label">Node.js</span>
            <svg>
              <rect className="border-rect"></rect>
              { resting &&
                <Spring
                  from={{ width: '0%' }}
                  to={{ width: '75%' }}>
                  { 
                    style =>
                      <rect className="fill-rect" style={style}></rect>
                  }
                </Spring>
              }
            </svg>
          </li>
          <li>
            <span className="proficiency-label">Java</span>
            <svg>
              <rect className="border-rect"></rect>
              { resting &&
                <Spring
                  from={{ width: '0%' }}
                  to={{ width: '45%' }}>
                  { 
                    style =>
                      <rect className="fill-rect" style={style}></rect>
                  }
                </Spring>
              }
            </svg>
          </li>
          <li>
            <span className="proficiency-label">Python</span>
            <svg>
              <rect className="border-rect"></rect>
              { resting &&
                <Spring
                  from={{ width: '0%' }}
                  to={{ width: '65%' }}>
                  { 
                    style =>
                      <rect className="fill-rect" style={style}></rect>
                  }
                </Spring>
              }
            </svg>
          </li>
          <li>
            <span className="proficiency-label">Mongodb</span>
            <svg>
              <rect className="border-rect"></rect>
              { resting &&
                <Spring
                  from={{ width: '0%' }}
                  to={{ width: '75%' }}>
                  { 
                    style =>
                      <rect className="fill-rect" style={style}></rect>
                  }
                </Spring>
              }
            </svg>
          </li>
          <li>
            <span className="proficiency-label">MySql</span>
            <svg>
              <rect className="border-rect"></rect>
              { resting &&
                <Spring
                  from={{ width: '0%' }}
                  to={{ width: '65%' }}>
                  { 
                    style =>
                      <rect className="fill-rect" style={style}></rect>
                  }
                </Spring>
              }
            </svg>
          </li>
        </ul>
      </div>
    }
  </div>
);

export default Info;
