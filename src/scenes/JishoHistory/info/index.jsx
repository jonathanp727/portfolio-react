import React from 'react';

import './style.scss';

const JishoHistoryInfo = ({ style }) => (
  <div className="introduction-info" style={style}>
    <p className="desc">
      Jisho History is a tool to aid in remembering new
      Japanese vocabulary. Users can mark a word whenever
      they look up a word on the dictionary website jisho.org
      using a chrome extension. Then using the website, they
      can keep track and analyze all the words they have looked
      up in order to increase vocab retension.
    </p>
  </div>
);

export default JishoHistoryInfo;
