import React from 'react';

import './style.scss';

const FlashcardsInfo = () => (
  <div className="flashcards-info">
    <p>
      I made this single-page app in order to simplify the
      process I go through every day of creating new Japanese
      Flashcards. It replaces the grueling process of copying
      and pasting data about a new word with the ability to load
      all relevant data automatically from it's own mySql database.
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

export default FlashcardsInfo;
