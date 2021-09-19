export const openAnswerModal = (event) => {
  document.getElementById('answer-modal').style.cssText = 'visibility: visible';
  console.log(event.target.parentNode.parentNode.parentNode.getAttribute('class').split(' ')[1]);
};

export const formatDate = (date) => new Date(date).toLocaleDateString('en-us', { year: 'numeric', day: 'numeric', month: 'short' });

export const checkForHelpfulness = (answer) => {
  if (answer === undefined) { return 0; }
  return answer.helpfulness;
};

export const handleReport = (event) => {
  event.preventDefault();
  console.log('hadnlign report');
};