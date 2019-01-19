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
      nameDone: false,
      isFirefox: typeof InstallTrigger !== 'undefined',
    };
  }

  // Update state to keep track of the last route (to determine which transition animation to use)
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.visited && !prevState.hiDone) {
      return {
        hiDone: true,
        nameDone: true,
      }
    }
    return null;
  }

  render() {
    const { hiDone, isFirefox, nameDone } = this.state;
    const { resting, onRest, visited } = this.props;

    return (
      <div className="introduction-content">
        <div className="text-cont">
          <Transition
            native
            config={config.fast}
            from={{ opacity: 0, position: 'absolute', overflow: 'hidden', height: 0 }}
            enter={[{ opacity: 1, height: 'auto' }]}
            leave={{ height: 0 }}
            immediate={visited}
            onRest={() => this.setState({ hiDone: true })}
          >
            {
              show => style => (
                <animated.div className="hi" style={style}>Hi I'm</animated.div>
              )
            }
          </Transition>
          <span className="divider"/>
          <div className="name-cont">
            { hiDone &&
              <Transition
                native
                items={name}
                config={config.wobbly}
                keys={item => item.key}
                trail={20}
                immediate={visited}
                from={{ opacity: 0, transform: 'translate3d(-100%,0,0) scale(2)', textShadow: '0 6px 6px rgba(0,0,0,.5)' }}
                enter={{ opacity: 1, transform: 'translate3d(0,0,0) scale(1)', textShadow: '0 4px 4px rgba(0,0,0,.25)' }}
                leave={{ opacity: 1, transform: 'translate3d(100%,0,0)'}}
                onRest={item => {
                  if (item.key === 14) {
                    onRest();
                    this.setState({ nameDone: true });
                  }
                }}
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
          {
            nameDone && isFirefox &&
            <Transition
              native
              config={config.fast}
              from={{ opacity: 0, position: 'absolute', overflow: 'hidden', height: 0 }}
              enter={[{ opacity: 1, height: 'auto', padding: '8px' }]}
              leave={{ height: 0 }}
            >
              {
                show => style => (
                  <animated.div className="warning" style={style}>Firefox support undergoing development</animated.div>
                )
              }
            </Transition>
          }
        </div>
      </div>
    );
  }
}

export default IntroductionContent;
