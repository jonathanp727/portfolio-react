import React from 'react';
import { Transition, animated, config, Spring } from 'react-spring';

import './style.scss';

const flashcards = [
  { front: '電車', back: 'Train' },
  { front: '勇気', back: 'Courage' },
  { front: '食べる', back: 'To eat' },
];

class FlashcardsContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: [
        false,
        false,
        false,
      ],
    }
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(index) {
    const newToggle = [...this.state.toggle];
    newToggle[index] = !newToggle[index];
    this.setState({ toggle: newToggle });
  }

  render() {
    const { toggle } = this.state;
    const { resting } = this.props; 
    return (
      <div className="flashcards-content">
        <div className="title-cont">
          <h1>Japanese Flashcards</h1>
        </div>
        <div className="flashcards-cont">
          { resting && 
            <Transition
              native
              items={flashcards}
              keys={card => card.front}
              trail={200}
              config={config.slow}
              from={{ opacity: 0, transform: 'rotate(0deg)', transform: 'scale(2)' }}
              enter={{ opacity: 1, transform: 'scale(1)' }}
              leave={{ opacity: 0, transform: 'scale(2)' }}
            >
              {
                (card, state, index) => style => {
                  return (
                    <animated.div className="flashcard" style={style} onClick={() => this.handleToggle(index)}>
                      <span>{toggle[index] ? card.front : card.back}</span>
                    </animated.div>
                  )
                }
              }
            </Transition>
          }
        </div>
      </div>
    );
  }
}

export default FlashcardsContent;
