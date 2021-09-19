import React from 'react';
import PropTypes from 'prop-types';

const Review = (props) => {
  const getDate = (inDate) => {
    const months = {
      '01': 'January', '02': 'Feburary', '03': 'March',
      '04': 'April', '05': 'May', '06': 'June',
      '07': 'July', '08': 'August', '09': 'September',
      '10': 'October', '11': 'November', '12': 'December'
    };
    const day = inDate.slice(8, 10);
    const month = months[inDate.slice(5, 7)];
    const year = inDate.slice(0, 4);
    return `${month} ${day}, ${year}`;
  };

  return (
    <div id="ReviewContainer">
      <div id="starRating">StarRating</div>
      <div id="verifiedPurchaser">Verified Purchaser</div>
      <span id="reviewUserName">{props.review.reviewer_name}</span>
      <span id="reviewDate">{getDate(props.review.date)}</span>
      <span id="reviewSummary">{props.review.summary}</span>
      <p id="reviewBody">{props.review.body}</p>
      <span id="reviewHelpful">Helpful?
        <button className="helpfulnessLinks" id="reviewYes">Yes({props.review.helpfulness})</button>
        <button className="helpfulnessLinks" id="reviewNo">No({props.review.helpfulness})</button>
      </span>
      <button id="reviewReport">Report</button>
    </div>
  );
};
export default Review;
