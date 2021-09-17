/* eslint-disable no-unused-expressions */
import axios from 'axios';

export const openQuestionModal = (event) => { document.getElementById('question-modal').style.cssText = 'visibility: visible'; };

export const showMoreQuestions = (event) => {
  var currentHeightCss = document.getElementById('container').style.cssText;
  // console.log(currentHeightCss);
  // if (currentHeightCss === '' || currentHeightCss === 'height: 750px;') {
  //   console.log('current height is now 925px');
  //   document.getElementsByClassName('container')[0].style.height = '925px';
  //   document.getElementsByClassName('q-wrapper')[0].style.height = '700px';
  //   document.getElementsByClassName('more-answe
  // red-questions')[0].innerText = 'Show Less Questions';
  // } else if ((currentHeightCss === 'height: 925px;')) {
  //   console.log('current height is 725px');
  //   document.getElementsByClassName('container')[0].style.height = '750px';
  //   document.getElementsByClassName('q-wrapper')[0].style.height = '525px';
  //   document.getElementsByClassName('more-answe
  // red-questions')[0].innerText = 'Show Less Questions';
  // }
};

export const getQuestions = (product) => {
  axios.get(`/qa/questions/?product_id=${product.id}`)
    .then((res) => {
      console.log(res.data.results);
    })
    .catch((err) => console.log(err));
};


export const loadMoreAnswers = (event) => {
  console.log('load more answers click');
};

