import React from 'react';
import { Pie, HorizontalBar, defaults } from 'react-chartjs-2';
import { Spring, animated, config } from 'react-spring';

import * as data from './chart/data';
import * as options from './chart/options';

import './style.scss';

class TheHarvestContent extends React.Component {
  render() {
    const { resting } = this.props; 
    return (
      <div className="theharvest-content">
        <div className="title-cont">
          <h1>The Harvest</h1>
        </div>
        { resting &&
          <Spring
            config={config.slow}
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
          >
            { style =>
            <animated.div className="chart-cont" style={style}>
              <div className="chart">
                <HorizontalBar data={data.productSales} options={options.bar}/>
                <p className="chart-desc">
                  Oils are your most popularly sold product category.
                </p>
              </div>
              <div className="chart">
                <Pie data={data.customerBrandPreferences} options={options.pie} />
                <p className="chart-desc">
                  44% of your customers own Challenger machinery.
                </p>
              </div>
            </animated.div>
            }
          </Spring>
        }
      </div>
    );
  }
}

export default TheHarvestContent;