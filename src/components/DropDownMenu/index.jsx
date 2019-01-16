import React from 'react';
import { Link } from 'react-router-dom';
import { Transition, config, animated } from 'react-spring';

import './style.scss';

class DropDownMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hovered: false,
      renderedItems: [],
    };

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter(e) {
    this.setState({ hovered: true, renderedItems: [...this.props.items] });
  }

  handleMouseLeave(e) {
    this.setState({ renderedItems: [] })

    // pop elements off end one by one to reverse animation (Doesn't work)
    // const numItems = this.state.renderedItems.length;
    // const delay = 150;
    // for (let i = 0; i < numItems; i += 1) {
    //   setTimeout(() => {
    //     const newItems = [];
    //     for (let j = 0; j < this.state.renderedItems.length - 1; j += 1) {
    //       newItems.push(this.state.renderedItems[j]);
    //     }
    //     this.setState({ renderedItems: newItems });
    //   }, delay * i);
    // }
  }

  render() {
    const { buttonText, items } = this.props;
    const { hovered, renderedItems } = this.state;  
    console.log(renderedItems);
    return (
      <div
        className="dropdown"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <div className="button">
          <span>{ buttonText } </span>
        </div>
        <div className="menu">
          <Transition
            reset
            unique
            config={config.fast}
            trail={150}
            items={renderedItems}
            key={item => item.key}
            from={{ opacity: 0, transform: 'translate3d(0, -70%, 0)' }}
            enter={{ opacity: 1, transform: 'translate3d(0, 0, 0)' }}
            leave={{ opacity: 0, transform: 'translate3d(0, -70%, 0)' }}
          >
            {
              item => style => {
                return (
                  <animated.div style={style} className="menu-el">
                    <Link to={`/portfolio/${item}`} className="link">
                      {item}
                    </Link>
                  </animated.div>
                )
              }
            }
          </Transition>
        </div>
      </div>
    )
  }
}

export default DropDownMenu;
