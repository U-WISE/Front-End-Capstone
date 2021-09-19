/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import * as utils from './utils/Answers.utils.js';

const Answers = ({ answers }) => {
  const [currentAnswersShows, showTwoMoreAnswers] = useState(2);
  const [currentIndex, setIndex] = useState(0);
  const answersArr = [];

  const checkForSeller = (answer) => {
    if (answer === undefined) { return 'ddd'; }
    if (answer !== 'Seller') { return answer.answerer_name; }
    return <b>Seller</b>;
  };

  if (Object.keys(answers).length === 0) return (<span> Not Answered Yet</span>);

  const loadMoreAnswers = (event) => {
    var uniqueId = answers[Object.keys(answers)[0]].id;

    console.log(answers);

    setIndex(uniqueId);
    showTwoMoreAnswers(currentAnswersShows + answersArr.length);

    if (answersArr.length <= 3) {
      event.target.style.visibility = 'hidden';
      event.target.parentNode.parentNode.style.height = 120;
    }
  };

  for (let i = 0; i < Object.keys(answers).length; i++) {
    answersArr.push(answers[Object.keys(answers)[i]]);
  }

  return (
    <div>
      {answersArr.splice(0, currentAnswersShows).map((answer, index) => {
        return (
          <div key={index}>
            <span>
              {utils.checkForAnswer(answer)} &nbsp; | &nbsp;
              By: <b>{checkForSeller(answer)}</b>
            </span>
          </div>
        );
      })}
      <button className={`load-more-answers load-more-answers${currentIndex}`} onClick={loadMoreAnswers}>Load More Answers</button>
    </div>
  );
};

export default Answers;