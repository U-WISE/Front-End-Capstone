import React, { useState, useEffect, useContext } from 'react';
import { reviewsContext } from '../../contexts/index.js';

const RatingBreakdown = () => {
  const context = useContext(reviewsContext);

  const clearFilters = () => {
    context.setFiltered({
      'one': false, 'two': false, 'three': false, 'four': false, 'five': false
    });
  };

  const showFilters = () => {
    let filters = '';
    if (context.filtered.five) {
      filters += 'Five Stars ';
    }
    if (context.filtered.four) {
      filters += 'Four Stars ';
    }
    if (context.filtered.three) {
      filters += 'Three Stars ';
    }
    if (context.filtered.two) {
      filters += 'Two Stars ';
    }
    if (context.filtered.one) {
      filters += 'One Star ';
    }
    filters.slice(-1);
    if (context.filtered.five
      || context.filtered.four
      || context.filtered.three
      || context.filtered.two
      || context.filtered.one) {
      return (
        <span id="appliedFilters">Applied Filters: {filters}<button className="linkButtons" onClick={clearFilters}>Clear Filters</button></span>
      );
    }
    return null;
  };

  const totalReviews = context.reviews.length;
  let oneStarReviews = 0;
  let twoStarReviews = 0;
  let threeStarReviews = 0;
  let fourStarReviews = 0;
  let fiveStarReviews = 0;
  let recommended = 0;

  for (let i = 0; i < context.reviews.length; i++) {
    if (context.reviews[i].rating === 1) {
      oneStarReviews++;
    } else if (context.reviews[i].rating === 2) {
      twoStarReviews++;
    } else if (context.reviews[i].rating === 3) {
      threeStarReviews++;
    } else if (context.reviews[i].rating === 4) {
      fourStarReviews++;
    } else if (context.reviews[i].rating === 5) {
      fiveStarReviews++;
    }
    if (context.reviews[i].recommend === true) {
      recommended++;
    }
  }
  recommended = ((recommended / totalReviews) * 100).toFixed(1);
  if (recommended === 'NaN') {
    recommended = 0;
  }

  const onePercentage = Math.round((oneStarReviews / totalReviews) * 100);
  const twoPercentage = Math.round((twoStarReviews / totalReviews) * 100);
  const threePercentage = Math.round((threeStarReviews / totalReviews) * 100);
  const fourPercentage = Math.round((fourStarReviews / totalReviews) * 100);
  const fivePercentage = Math.round((fiveStarReviews / totalReviews) * 100);

  let ratingNumber = (
    (oneStarReviews * 1
    + twoStarReviews * 2
    + threeStarReviews * 3
    + fourStarReviews * 4
    + fiveStarReviews * 5) / totalReviews
  ).toFixed(1);
  if (ratingNumber === 'NaN') {
    ratingNumber = 0;
  }

  if (context.reviews.length === 0) {
    return (
      <div>No reviews found for these filters
        <button className="linkButtons" onClick={clearFilters}> Clear Filters
        </button>
      </div>
    );
  }

  return (
    <div id="RatingsBreakdown">
      <div id="RBStars">Rating Stars</div>
      <div id="RBRating">{ratingNumber}</div>
      <h5 id="RatingBreakdown">Rating Breakdown</h5>
      {showFilters()}

      <button
        className="linkButtons"
        id="fiveStar"
        onClick={() => {
          context.setFiltered({
            'one': context.filtered.one, 'two': context.filtered.two, 'three': context.filtered.three, 'four': context.filtered.four, 'five': !context.filtered.five
          });
        }}
      >5 stars
      </button>
      <div className="borderBar" id="fiveStarBar"><div className="BarFill" style={{ width: `${fivePercentage}%` }}></div></div>
      <div id="fiveStarCount">{fiveStarReviews}</div>

      <button
        className="linkButtons"
        id="fourStar"
        onClick={() => {
          context.setFiltered({
            'one': context.filtered.one, 'two': context.filtered.two, 'three': context.filtered.three, 'four': !context.filtered.four, 'five': context.filtered.five
          });
        }}
      >4 stars
      </button>
      <div className="borderBar" id="fourStarBar"><div className="BarFill" style={{ width: `${fourPercentage}%` }}></div></div>
      <div id="fourStarCount">{fourStarReviews}</div>

      <button
        className="linkButtons"
        id="threeStar"
        onClick={() => {
          context.setFiltered({
            'one': context.filtered.one, 'two': context.filtered.two, 'three': !context.filtered.three, 'four': context.filtered.four, 'five': context.filtered.five
          });
        }}
      >3 stars
      </button>
      <div className="borderBar" id="threeStarBar"><div className="BarFill" style={{ width: `${threePercentage}%` }}></div></div>
      <div id="threeStarCount">{threeStarReviews}</div>

      <button
        className="linkButtons"
        id="twoStar"
        onClick={() => {
          context.setFiltered({
            'one': context.filtered.one, 'two': !context.filtered.two, 'three': context.filtered.three, 'four': context.filtered.four, 'five': context.filtered.five
          });
        }}
      >2 stars
      </button>
      <div className="borderBar" id="twoStarBar"><div className="BarFill" style={{ width: `${twoPercentage}%` }}></div></div>
      <div id="twoStarCount">{twoStarReviews}</div>

      <button
        className="linkButtons"
        id="oneStar"
        onClick={() => {
          context.setFiltered({
            'one': !context.filtered.one, 'two': context.filtered.two, 'three': context.filtered.three, 'four': context.filtered.four, 'five': context.filtered.five
          });
        }}
      >1 star
      </button>
      <div className="borderBar" id="oneStarBar"><div className="BarFill" style={{ width: `${onePercentage}%` }}></div></div>
      <div id="oneStarCount">{oneStarReviews}</div>

      <div id="PercentReccomend">{`${recommended}% of reviews reccomended this product`}</div>
    </div>
  );
};
export default RatingBreakdown;
