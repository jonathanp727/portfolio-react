import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import IntroductionContent from './scenes/Introduction/content';
import IntroductionInfo from './scenes/Introduction/info';
import PortfolioContent from './scenes/Portfolio/content';
import PortfolioInfo from './scenes/Portfolio/info';

import './styles/reset.css';
import './style.scss';

const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      <div className="body">
        <div className="content-cont">
          <div className="content">
            <Switch>
              <Route exact path="/" component={IntroductionContent} />
              <Route exact path="/portfolio" component={PortfolioContent} />
            </Switch>
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
  </BrowserRouter>
);

export default App;
