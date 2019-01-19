import React from 'react';

import './style.scss';

const JishoHistoryInfo = ({ style }) => (
  <div className="jishohistory-info" style={style}>
    <p className="desc">
      Jisho History is a tool to aid in remembering new
      Japanese vocabulary. Users can mark any word they
      look up on jisho.org with the chrome extension.  Then
      using the website, they can keep track and analyze all
      the words they have looked up in order to increase vocab
      retension.
    </p>
    <p className="desc desc-2">
      Using tesseract OCR and a japanese tokenizer, users can also
      send in photos of Japanese text and automatically add unknown
      words without a third party website.  
    </p>
    <a href="https://github.com/jonathanp727/jisho-history-react" target="_blank">
      <div className="link">
        <span>View react code</span>
      </div>
    </a>
    <a href="https://github.com/jonathanp727/jisho-history-api" target="_blank">
      <div className="link">
        <span>View node code</span>
      </div>
    </a>
  </div>
);

export default JishoHistoryInfo;
