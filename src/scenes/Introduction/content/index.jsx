import React from 'react';
import { Link } from 'react-router-dom';
import { Transition, animated, config, Spring } from 'react-spring';

import './style.scss';

const name = [
  { letter: 'J', key: 0 },
  { letter: 'o', key: 1 },
  { letter: 'n', key: 2 },
  { letter: 'a', key: 3 },
  { letter: 't', key: 4 },
  { letter: 'h', key: 5 },
  { letter: 'a', key: 6 },
  { letter: 'n', key: 7 },
  { letter: ' ', key: 8 },
  { letter: 'P', key: 9 },
  { letter: 'h', key: 10 },
  { letter: 'i', key: 11 },
  { letter: 'p', key: 12 },
  { letter: 'p', key: 13 },
  { letter: 's', key: 14 },
];
class IntroductionContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hiDone: false,
    };
  }

  render() {
    const { hiDone } = this.state;
    const { resting } = this.props;

    return (
      <div className="introduction-content">
          <div className="text-cont">
            <Spring
              native
              config={{ tension: 120 }}
              from={{ opacity: 0 }}
              to={{ opacity: 1 }}
              onRest={() => this.setState({ hiDone: true })}
            >
            {
              style => (
                <animated.h1 className="hi" style={style}>Hi I'm</animated.h1>
              )
            }
            </Spring>
            <span className="divider"/>
            <div className="name-cont">
              { hiDone &&
                <Transition
                  native
                  items={name}
                  config={config.wobbly}
                  keys={item => item.key}
                  trail={20}
                  from={{ opacity: 0, transform: 'translate3d(-100%,0,0) scale(2)' }}
                  enter={[{ opacity: 1, transform: 'translate3d(0,0,0) scale(0)' }, { transform: 'translate3d(0,0,0) scale(1)'}]}
                  leave={{ opacity: 0, transform: 'translate3d(100%,0,0)'}}
                >
                  {
                    item => style => {
                      if (item.letter === ' ') {
                        return <animated.span style={{ marginLeft: '1em' }}></animated.span>
                      }
                      return <animated.h1 className="name" style={style}>{item.letter}</animated.h1>
                    }
                  }
                </Transition>
              }
            </div>
          </div>
        </div>
    );
  }
}

export default IntroductionContent;
