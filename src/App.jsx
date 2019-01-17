import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { Transition, config } from 'react-spring';

import Header from './components/Header';
import IntroductionContent from './scenes/Introduction/content';
import IntroductionInfo from './scenes/Introduction/info';
import PortfolioContent from './scenes/Portfolio/content';
import PortfolioInfo from './scenes/Portfolio/info';
import HackIllinoisContent from './scenes/HackIllinois/content';
import HackIllinoisInfo from './scenes/HackIllinois/info';

import './styles/reset.css';
import './style.scss';

// Object containing all valid routes
const routes = {
  introduction: '/',
  portfolio: '/portfolio',
  hackIllinois: '/portfolio/hackillinois'
};

// Takes location and return proper page components
const mapRouteToComponents = (pathname) => {
  switch (pathname) {
    case routes.introduction:
      return { Content: IntroductionContent, Info: IntroductionInfo };
    case routes.portfolio:
      return { Content: PortfolioContent, Info: PortfolioInfo };
    case routes.hackIllinois:
      return { Content: HackIllinoisContent, Info: HackIllinoisInfo };
  }
}

// Mapping of pages to indices to determine which animation to use
const order = {
  [routes.introduction]: 0,
  [routes.portfolio]: 1,
  [routes.hackIllinois]: 2,
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

  // Update state to keep track of the last route (to determine which transition animation to use)
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

    const fromStylesContent = order[prevRoute] < order[curRoute] ?
      {
        opacity: .8,
        left: '100%',
      } :
      {
        opacity: 1,
        left: '0%',
      };
    const enterStylesContent = order[prevRoute] < order[curRoute] ?
      {
        opacity: 1,
        left: '0%',
      } :
      {
        opacity: 1,
        left: '0%',
      };
    const leaveStylesContent = order[prevRoute] < order[curRoute] ?
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
        transform: 'translate3d(0, 30%, 0)'
      } :
      {
        opacity: 0,
        transform: 'translate3d(0, -30%, 0)',
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
        transform: 'translate3d(0, -30%, 0)'
      } :
      {
        opacity: 0,
        transform: 'translate3d(0, 30%, 0)',
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
                  from={fromStylesContent}
                  enter={enterStylesContent}
                  leave={leaveStylesContent}
                >
                  {
                    pathname => style => {
                      const { Content } = mapRouteToComponents(pathname);
                      return <Content style={style} />
                    }
                  }
                </Transition>
              </div>
              <div className="info">
                <Transition
                  config={{ tension: 40, friction: 10 }}
                  items={location.pathname}
                  from={fromStylesInfo}
                  enter={enterStylesInfo}
                  leave={leaveStylesInfo}
                >
                  {
                    pathname => style => {
                      const { Info } = mapRouteToComponents(pathname);
                      return <Info style={style} />
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
