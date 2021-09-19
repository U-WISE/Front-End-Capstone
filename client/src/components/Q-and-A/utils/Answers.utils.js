export const checkForAnswer = (answer) => {
  if (answer === undefined) { return 'Not answered yet'; }
  return answer.body;
};

// export const checkForSeller = (answer) => {
//   if (answer === undefined) { return 'ddd'; }
//   if (answer !== 'Seller') { return answer.answerer_name; }
//   return 'Seller';
// };

export const checkForHelpfulness = (answer) => {
  if (answer === undefined) { return 0; }
  return answer.helpfulness;
};

export const loadMoreAnswers = (event) => {
  var parentClass = event.target.parentNode.parentNode.parentNode.getAttribute('class').split(' ')[0];
  var parentClassAnswer = event.target.parentNode.parentNode.getAttribute('class').split(' ')[0];

  var containerCss = document.getElementsByClassName(parentClass)[0].style.cssText;
  var answerCss = document.getElementsByClassName(parentClassAnswer)[0].style.cssText;

  console.log(containerCss);
  console.log(answerCss);
  // console.log(document.getElementsByClassName(parentClass)[0].style);
  // console.log(document.getElementsByClassName(parentClassAnswer)[0].style);
  containerCss = 'height: 250px';
  answerCss = 'height: 150px';



  // if (
  //   containerCss === 'height: 195px' && answerCss === 'height: 104px') {
  //   console.log(containerCss);
  //   console.log(answerCss);
  //   containerCss = 'height: 250px';
  //   answerCss = 'height: 150px';
  //   console.log(containerCss);
  //   console.log(answerCss);
  //   console.log('opening!');
  // } else if (containerCss === ''
  // || (containerCss === 'height: 250px' && answerCss === 'height: 150px')) {
  //   console.log(containerCss);
  //   console.log(answerCss);
  //   containerCss = 'height: 195px';
  //   answerCss = 'height: 104px';
  //   console.log(containerCss);
  //   console.log(answerCss);
  //   console.log('closing!');
  // }

  // console.log(containerCss);
  // console.log(answerCss);
  // console.log(containerCss = 'height: 250px');
  // console.log(answerCss = 'height: 150px');
  // console.log(containerCss);
  // console.log(answerCss);
  // console.log(document.getElementsByClassName('qa-container')[0].style.cssText = 'height: ');
  // document.getElementsByClassName('load-more-answers');
};



