/* eslint-disable max-len */
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import * as utils from './utils/AllQandA.utils.js';
import { appContext } from '../../contexts/index.js';
import Answers from './Answers.jsx';

const AllQandA = (props) => {
  var { product } = useContext(appContext);

  const handleReport = (event) => {
    var questionId = event.target.getAttribute('class').split(' ')[0];
    var reportElement = event.target;
    reportElement.innerText = 'Reported ✓';

    event.preventDefault();
    // DO NOT COMMENT OUT YET WILL NOT SHOW REPORTED QUESTION
    // axios.put(`/qa/questions/${questionId}/report`)
    //   .then((res) => console.log(res.status))
    //   .catch((err) => console.log(err));
  };

  const handleHelpful = (event) => {
    var questionId = event.target.getAttribute('class').split(' ')[1];
    axios.put(`/qa/questions/${questionId}/helpful`)
      .then((res) => console.log(res.status))
      .catch((err) => console.log(err));
  };

  const handleHelpfulAnswer = (event) => {
    var answerId = event.target.getAttribute('class').split(' ')[0];
    axios.put(`/qa/questions/${answerId}/helpful`)
      .then((res) => console.log(res.status))
      .catch((err) => console.log(err));
  };

  return (
    props.questions.map((question, index) => {
      return (
<<<<<<< HEAD
        <div className={`qa-container ${question.question_id}`} key={index}>
          <div className="question"><b>Q:</b> {question.question_body}
            <div className="helpful">Helpful?&nbsp;
              <button className="yes-button">Yes</button>( {question.question_helpfulness} )
              <button className="add-answer" onClick={utils.openAnswerModal}>Add Answer</button>
=======
        <div key={index}>
          <div className="qa-container">
            <div className="question"><b>Q:</b>{question.question_body}
              <div className="helpful">&nbsp;Helpful?&nbsp;
                <button className={`yes-button ${question.question_id}`} onClick={handleHelpful}>Yes</button>&nbsp;
                ( {question.question_helpfulness} )
                <button className="add-answer" onClick={utils.openAnswerModal}>Add Answer</button>
              </div>
>>>>>>> 6a1b263bc89f37433f0de71ae18d4b55858f0ccf
            </div>
            <div className={`${question.question_id} answer`}><b>A:</b>
              {/* ------------- Answers Text ------------- */}
              <Answers answers={question.answers} />
            </div>
            {/* ------------- Date -------------*/}
            <div>&nbsp;<b>Date:</b>&nbsp;{utils.formatDate(question.question_date)}</div>
            <div>&nbsp;Helpful?&nbsp;
              <button className={`${question.question_id} yes-button`} onClick={handleHelpfulAnswer}> Yes </button>&nbsp;
              ( {utils.checkForHelpfulness(question.answers[Object.keys(question.answers)[0]])} ) |&nbsp;&nbsp;
              <a
                className={`${question.question_id}`}
                href=" "
                onClick={handleReport}
              >Report
              </a>
            </div>
          </div>
        </div>
      );
    })
  );
};

export default AllQandA;