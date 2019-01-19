import React from 'react';
import { Link } from 'react-router-dom';
import { Spring, Transition, animated, config } from 'react-spring';

import './style.scss';

class JishoHistoryContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [
        { text: 'むずかしい', count: 3 },
        { text: '美しい', count: 5 },
        { text: '電車', count: 2 },
      ],
    };

    this.increment = this.increment.bind(this);
  }

  increment(word) {
    const index = this.state.words.findIndex(el => el.text === word);
    if (index === -1) {
      const newWords = [...this.state.words];
      newWords.push({ text: word, count: 1 });
      this.setState({ words: newWords });
    } else {
      const newWords = [...this.state.words];
      newWords[index].count += 1;
      this.setState({ words: newWords });
    }
  }

  render() {
    const { words } = this.state;
    const { resting } = this.props;
    return (
      <div className="jishohistory-content">
        <div className="title-cont">
          <h1>Jisho History</h1>
        </div>
        <div className="jisho-demo">
          <div className="phone-cont">
            { resting && 
              <Spring
                native
                config={config.slow}
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
              >
                {style => 
                  <animated.div className="phone" style={style}>
                    <div className="top" />
                    <div className="screen">
                      <div className="searchbar">
                        <span>でんしゃ</span>
                      </div>
                      <div className="entry">
                        <div className="upper-cont">
                          <span>電車</span>
                          <button onClick={() => this.increment('電車')}>+</button>
                        </div>
                        <div className="def-cont">
                          <span className="pos">Noun</span>
                          <div className="def">
                            <span className="num">1.</span>
                            <span>train; electric train</span>
                          </div>
                        </div>
                      </div>
                      <div className="entry">
                        <div className="upper-cont">
                          <span>殿舎</span>
                          <button onClick={() => this.increment('殿舎')}>+</button>
                        </div>
                        <div className="def-cont">
                          <span className="pos">Noun</span>
                          <div className="def">
                            <span className="num">1.</span>
                            <span>palace</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bottom" />
                  </animated.div>
                }
              </Spring>
            }
          </div>
          <div className="words-cont">
            <div className="words">
              { resting &&
                <Transition
                  native
                  config={config.wobbly}
                  items={words}
                  keys={word => word.text}
                  trail={200}
                  from={{ opacity: 0, transform: 'translate3d(0, 200%,0)' }}
                  enter={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                  leave={{ opacity: 0, transform: 'translate3d(0,200%,0)' }}
                >
                  {
                    item => style => (
                      <animated.div className="word-el" key={item.text} style={style}>
                        <span className="word">{item.text}</span>
                        <div className="count-cont">
                          <span>{item.count}</span>
                        </div>
                      </animated.div>    
                    )
                  }
                </Transition>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default JishoHistoryContent;
