/* eslint-disable no-unused-expressions */
import axios from 'axios';

export const openQuestionModal = () => {
  document.getElementById('question-modal').style.cssText = 'visibility: visible';
};

export const showMoreQuestions = () => {
  console.log('show more questions click infitie scroll i thikn');
  document.getElementsByClassName('q-wrapper')[0].style.height = '1000px';
  console.log(document.getElementById('container').style.cssText);
  document.getElementsByClassName('container')[0].style.height = '1200px';
  console.log(document.getElementsByClassName('load-more-answers')[0]);
};


// const moreReviews = () => {
//   if (context.reviews.length > 2 && loadedReviews < context.reviews.length) {
//     return <button onClick={() => setLoadedReviews(loadedReviews + 2)}>More Reviews</button>;
//   }
//   return null;
// };