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
  }

  render() {
    const { buttonText, items, buttonClass, buttonLink, links } = this.props;
    const { hovered, renderedItems } = this.state;  
    return (
      <div
        className="dropdown"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <Link to={buttonLink} className={buttonClass}>{buttonText}</Link>
        <div className="menu">
          <Transition
            reset
            unique
            config={config.fast}
            trail={200}
            items={renderedItems}
            key={item => item.key}
            from={{ opacity: 0, transform: 'translate3d(0, -70%, 0)' }}
            enter={{ opacity: 1, transform: 'translate3d(0, 0, 0)' }}
            leave={{ opacity: 0, transform: 'translate3d(0, -70%, 0)' }}
          >
            {
              (item, state, index) => style => {
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
