import React from 'react';
import { animated } from 'react-spring';
import { Link } from 'react-router-dom';

import transitionArrow from 'assets/right-arrow.svg';
import './style.scss';

const Slide = ({ style, image, index, prev, next, children }) => (
  <animated.div className="slide" style={{ ...style, backgroundImage: `url(/assets/backgrounds/${image})`, zIndex: 10 + index }}>
    <div className="arrow-cont">
      { prev  &&
        <Link to={prev}>
          <img
            className="arrow left"
            src={transitionArrow}
            alt="Go back arrow"
          />
        </Link>
      }
    </div>
    <div className="page-content">
      { children }
    </div>
    <div className="arrow-cont">
      { next &&
        <Link to={next}>
          <img
            className="arrow right"
            src={transitionArrow}
            alt="Next page arrow"
          />
        </Link>
      }
    </div>
  </animated.div>
);

export default Slide;