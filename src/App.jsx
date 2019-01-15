import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { Transition, config } from 'react-spring';

import Header from './components/Header';
import IntroductionContent from './scenes/Introduction/content';
import IntroductionInfo from './scenes/Introduction/info';
import PortfolioContent from './scenes/Portfolio/content';
import PortfolioInfo from './scenes/Portfolio/info';

import './styles/reset.css';
import './style.scss';

// Takes location and return proper page component
const route = (pathname) => {
  switch (pathname) {
    case '/':
      return IntroductionContent;
    case '/portfolio':
      return PortfolioContent;
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    const { pathname } = this.props.location;
    this.state = {
      prevRoute: pathname,
      inTransition: false,
      curRoute: pathname,
      pages: [
        route(pathname),
      ],
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.location.pathname !== prevState.curRoute) {
      prevState.pages.push(route(nextProps.location.pathname))
      return {
        curRoute: nextProps.location.pathname,
      }
    }
    return null;
  }

  render() {
    const { location } = this.props;
    const { inTransition, pages } = this.state;
    console.log(pages);

    return (
      <Route>
        <div>
          <Header />
          <div className="body">
            <div className="content-cont">
              <div className="content">

                <Transition
                  config={config.fast}
                  items={pages}
                  from={{ opacity: .8, left: '100%', backgroundColor: 'green', zIndex: 2 }}
                  enter={{ opacity: 1, left: '0%' }}
                  leave={{ opacity: .9 }}
                  onRest={() => {
                    if (pages.length > 1) {
                      this.setState({ pages: [pages[1]] });
                    }
                  }}>
                  {(Item, state, index) => style => {
                    return <Item style={style} />
                  }
                  }
                </Transition>
              </div>
              <div className="info">
                <Switch>
                  <Route exact path="/" component={IntroductionInfo} />
                  <Route exact path="/portfolio" component={PortfolioInfo} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </Route>
    );
  }
}

export default withRouter(App);
