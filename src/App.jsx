import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { Transition, config, animated } from 'react-spring';

import Header from './components/Header';
import Slide from './components/Slide';
import IntroductionContent from './scenes/Introduction/content';
import IntroductionInfo from './scenes/Introduction/info';
import PortfolioContent from './scenes/Portfolio/content';
import PortfolioInfo from './scenes/Portfolio/info';
import HackIllinoisContent from './scenes/HackIllinois/content';
import HackIllinoisInfo from './scenes/HackIllinois/info';
import JishoHistoryContent from './scenes/JishoHistory/content';
import JishoHistoryInfo from './scenes/JishoHistory/info';
import FlashcardsContent from './scenes/Flashcards/content';
import FlashcardsInfo from './scenes/Flashcards/info';

import './styles/reset.css';
import './styles/base.scss';
import './style.scss';

// Object containing all valid routes
const routes = {
  introduction: '/',
  portfolio: '/portfolio',
  hackIllinois: '/portfolio/Hack Illinois',
  jishoHistory: '/portfolio/Jisho History',
  flashcards: '/portfolio/Flashcards',
};

// Takes location and return proper page components
const mapRouteToComponents = (pathname) => {
  switch (pathname) {
    case routes.introduction:
      return { Content: IntroductionContent, Info: IntroductionInfo, image: null, prev: null, next: routes.portfolio };
    case routes.portfolio:
      return { Content: PortfolioContent, Info: PortfolioInfo, image: 'portfolio.png', prev: routes.introduction, next: routes.hackIllinois };
    case routes.hackIllinois:
      return { Content: HackIllinoisContent, Info: HackIllinoisInfo, image: null, prev: routes.portfolio, next: routes.jishoHistory };
    case routes.jishoHistory:
      return { Content: JishoHistoryContent, Info: JishoHistoryInfo, image: 'jishohistory.jpg', prev: routes.hackIllinois, next: routes.flashcards };
    case routes.flashcards:
      return { Content: FlashcardsContent, Info: FlashcardsInfo, image: null, prev: routes.jishoHistory, next: null}
    default:
      return { Content: () => <div>Not found</div>, Info: () => <div>I'm Still Jonathan</div>}
  }
}

// Mapping of pages to indices to determine which animation to use
const order = {
  [routes.introduction]: 0,
  [routes.portfolio]: 1,
  [routes.hackIllinois]: 2,
  [routes.jishoHistory]: 3,
  [routes.flashcards]: 4,
  [routes.notFound]: 20,
}

class App extends React.Component {
  constructor(props) {
    super(props);
    const { pathname } = this.props.location;
    this.state = {
      prevRoute: pathname,
      curRoute: pathname,
      visited: {}
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
    const { prevRoute, curRoute, visited } = this.state;

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
                  native
                  config={config.fast}
                  items={location.pathname}
                  from={fromStylesContent}
                  enter={enterStylesContent}
                  leave={leaveStylesContent}
                  onRest={pathname => {
                    this.setState({ visited: { ...this.state.visited, [pathname]: true }});
                  }}
                  onDestroyed={pathname => this.setState({ })}
                >
                  {
                    pathname => style => {
                      const { Content, image, prev, next } = mapRouteToComponents(pathname);
                      return (
                        <Slide
                          style={style}
                          image={image}
                          prev={prev}
                          next={next}
                          index={order[pathname]}
                        >
                          <Content resting={curRoute && visited[pathname]}/>
                        </Slide>
                      );
                    }
                  }
                </Transition>
              </div>
              <div className="info">
                <Transition
                  native
                  config={{ tension: 40, friction: 10 }}
                  items={location.pathname}
                  from={fromStylesInfo}
                  enter={enterStylesInfo}
                  leave={leaveStylesInfo}
                >
                  {
                    pathname => style => {
                      const { Info } = mapRouteToComponents(pathname);
                      return (
                        <div className='info-cont'>
                          <animated.div style={style}>
                            <Info style={style} resting={curRoute && visited[pathname]}/>
                          </animated.div>
                        </div>
                      );
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
