import React from 'react';

import './style.scss';

const TheHarvestInfo = ({ style }) => (
  <div className="jishohistory-info" style={style}>
    <p className="desc">
      I built the Harvest along with three others for a Agriculture
      hackathon.  It is a supply chain management app built to help
      agricultural retailers manage stock and trade spare items with
      others.  It features a fully functional market place, the ability
      to upload items with pictures from your phone, as well as charts
      to guide users on how to best manage their business.  We also won
      first place!
    </p>
    <p className="desc desc-2">
      The site is built with react and node with a Mongodb backend.  I built
      the entire backend and helped out with much of the front end.
    </p>
    <a href="https://github.com/glassbeardglobal/agco-website" target="_blank">
      <div className="link">
        <span>View react code</span>
      </div>
    </a>
    <a href="https://github.com/glassbeardglobal/agco-api" target="_blank">
      <div className="link">
        <span>View node code</span>
      </div>
    </a>
  </div>
);

export default TheHarvestInfo;
