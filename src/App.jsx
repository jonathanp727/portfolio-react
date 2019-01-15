import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Transition, config } from 'react-spring';

import Header from './components/Header';
import IntroductionContent from './scenes/Introduction/content';
import IntroductionInfo from './scenes/Introduction/info';
import PortfolioContent from './scenes/Portfolio/content';
import PortfolioInfo from './scenes/Portfolio/info';

import './styles/reset.css';
import './style.scss';

const App = () => (
  <Router>
    <Route
      render={({ location }) => (
        <div>
          <Header />
          <div className="body">
            <div className="content-cont">
              <div className="content">
                <Transition
                  config={config.fast}
                  keys={location.pathname}
                  from={{ opacity: .8, left: '100%', backgroundColor: 'green' }}
                  enter={{ opacity: 1, left: '0%' }}
                  leave={{ opacity: .8 }}>
                  {item => style => (
                    <Switch location={location}>
                      <Route exact path="/" component={props => IntroductionContent({ ...props, style })} />
                      <Route exact path="/portfolio" component={props => PortfolioContent({ ...props, style })} />
                    </Switch>
                  )}
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
      )}
    />
  </Router>
);

export default App;
