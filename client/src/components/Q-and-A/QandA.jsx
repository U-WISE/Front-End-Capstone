/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable prefer-template */
/* eslint-disable max-len */
/* eslint-disable array-callback-return */

import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import AddQuestionModal from './AddQuestionModal.jsx';
import AddAnswerModal from './AddAnswerModal.jsx';
import { appContext } from '../../contexts/index.js';
import AllQandA from './AllQandA.jsx';
import * as utils from './utils/QandA.utils.js';

const QandA = () => {
  const { product } = useContext(appContext);

  const [questions, setQuestions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => { setSearchTerm(event.target.value); };

  const getData = () => {
    axios.get(`/qa/questions/?product_id=${product.id}`)
      .then((res) => { setQuestions((res.data.results).sort((a, b) => b.question_helpfulness - a.question_helpfulness)); })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (searchTerm <= 3) { getData(); }
    const results = questions.filter((question) => {
      return question.question_body.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setQuestions(results);
  }, [searchTerm]);

  useEffect(() => { getData(); }, []);

  const checkForAnsweredQuestions = () => {
    axios.get(`/qa/questions/?product_id=${product.id}`)
      .then((res) => {
        if (res.data.results.length <= 2) {
          document.getElementsByClassName('more-answered-questions')[0].style.visibility = 'hidden';
        }
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
            onChange={handleSearch}
            value={searchTerm}
          />
        </form>
      </div>
      <div className="q-wrapper"><AllQandA questions={questions} /></div>
      <div className="more-question-wrapper">{ checkForAnsweredQuestions() }
        <button className="more-answered-questions" onClick={utils.showMoreQuestions}> More Answered Questions</button>
        <button className="add-question" onClick={utils.openQuestionModal}>Add a Question</button>
      </div>
    </div>
  );
};

export default QandA;