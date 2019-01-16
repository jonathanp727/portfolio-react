import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { Transition, config } from 'react-spring';

import Header from './components/Header';
import IntroductionContent from './scenes/Introduction/content';
import IntroductionInfo from './scenes/Introduction/info';
import PortfolioContent from './scenes/Portfolio/content';
import PortfolioInfo from './scenes/Portfolio/info';
import HackillinoisContent from './scenes/HackIllinois/content';

import './styles/reset.css';
import './style.scss';

// Takes location and return proper page component
const route = (pathname) => {
  switch (pathname) {
    case '/':
      return IntroductionContent;
    case '/portfolio':
      return PortfolioContent;
    case '/portfolio/hackillinois':
      return HackillinoisContent;
  }
}

const routeInfo = (pathname) => {
  switch(pathname) {
    case '/':
      return IntroductionInfo;
    case '/portfolio':
      return PortfolioInfo;
    case '/portfolio/hackillinois':
      return IntroductionInfo;
  }
}

const order = {
  '/': 0,
  '/portfolio': 1,
  '/portfolio/hackillinois': 2,
}

class App extends React.Component {
  constructor(props) {
    super(props);
    const { pathname } = this.props.location;
    this.state = {
      prevRoute: pathname,
      curRoute: pathname,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.location.pathname !== prevState.curRoute) {
      return {
        curRoute: nextProps.location.pathname,
        prevRoute: prevState.curRoute,
      }
    }
    return null;
  }

  render() {
    const { location } = this.props;
    const { prevRoute, curRoute } = this.state;
    const fromStyles = order[prevRoute] < order[curRoute] ?
      {
        opacity: .8,
        left: '100%',
      } :
      {
        opacity: 1,
        left: '0%',
      };
    const enterStyles = order[prevRoute] < order[curRoute] ?
      {
        opacity: 1,
        left: '0%',
      } :
      {
        opacity: 1,
        left: '0%',
      };
    const leaveStyles = order[prevRoute] < order[curRoute] ?
      {
        opacity: .9,
      } :
      {
        opacity: .8,
        left: '100%',
      };

    const fromStylesInfo = order[prevRoute] < order[curRoute] ?
      {
        opacity: 0,
        transform: 'translate3d(0, 60%, 0)'
      } :
      {
        opacity: 0,
        transform: 'translate3d(0, -60%, 0)',
      };

    const enterStylesInfo = order[prevRoute] < order[curRoute] ?
      {
        opacity: 1,
        transform: 'translate3d(0, 0, 0)'
      } :
      {
        opacity: 1,
        transform: 'translate3d(0, 0, 0)',
      };

    const leaveStylesInfo = order[prevRoute] < order[curRoute] ?
      {
        opacity: 0,
        transform: 'translate3d(0, -60%, 0)'
      } :
      {
        opacity: 0,
        transform: 'translate3d(0, 60%, 0)',
      };

    return (
      <Route>
        <div>
          <Header />
          <div className="body">
            <div className="content-cont">
              <div className="content">
                <Transition
                  config={config.fast}
                  items={location.pathname}
                  from={fromStyles}
                  enter={enterStyles}
                  leave={leaveStyles}
                >
                  {
                    pathname => style => {
                      const Scene = route(pathname);
                      return <Scene style={style} />
                    }
                  }
                </Transition>
              </div>
              <div className="info">
                <Transition
                  config={config.fast}
                  items={location.pathname}
                  from={fromStylesInfo}
                  enter={enterStylesInfo}
                  leave={leaveStylesInfo}
                >
                  {
                    pathname => style => {
                      const Scene = routeInfo(pathname);
                      return <Scene style={style} />
                    }
                  }
                </Transition>
              </div>
            </div>
          </div>
        </div>
      </Route>
    );
  }
}

export default withRouter(App);
