/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable prefer-template */
/* eslint-disable max-len */
/* eslint-disable array-callback-return */

import React, { useState, useContext } from 'react';
import axios from 'axios';
import AddQuestionModal from './AddQuestionModal.jsx';
import AddAnswerModal from './AddAnswerModal.jsx';
import { appContext } from '../../contexts/index.js';
import AllQandA from './AllQandA.jsx';
import * as utils from './utils/QandA.utils.js';

const QandA = () => {
  const { product } = useContext(appContext);

  // Hides 'More Answered Questions' Button if less than 2 questions
  const checkForAnsweredQuestions = () => {
    axios.get(`/qa/questions/?product_id=${product.id}`)
      .then((res) => {
        res.data.results.length <= 2
          ? document.getElementsByClassName('more-answered-questions')[0].style.visibility = 'hidden'
          : document.getElementsByClassName('more-answered-questions')[0].style.visibility = 'visible';
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container" id="container">
      <AddQuestionModal />
      <AddAnswerModal />
      <div className="qanda">Questions and Answers</div>
      <div className="input-and-button">
        <form>
          <input
            className="question-input"
            type="text"
            placeholder="Have a question? Search for answers."
          />
        </form>
      </div>
      <div className="q-wrapper"><AllQandA /></div>
      <div className="more-question-wrapper">
        { checkForAnsweredQuestions() }
        <button className="more-answered-questions" onClick={utils.showMoreQuestions}> More Answered Questions</button>
        <button className="add-question" onClick={utils.openQuestionModal}>Add a Question</button>
      </div>
    </div>
  );
};

export default QandA;