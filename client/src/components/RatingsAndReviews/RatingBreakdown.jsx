import React, { useState, useEffect, useContext } from 'react';
import { reviewsContext } from '../../contexts/index.js';

const RatingBreakdown = () => {
  const { reviews, setFiltered, filtered } = useContext(reviewsContext);

  const clearFilters = () => {
    setFiltered({
      'one': false, 'two': false, 'three': false, 'four': false, 'five': false
    });
  };

  const showFilters = () => {
    let filters = '';
    if (filtered.five) {
      filters += 'Five Stars ';
    }
    if (filtered.four) {
      filters += 'Four Stars ';
    }
    if (filtered.three) {
      filters += 'Three Stars ';
    }
    if (filtered.two) {
      filters += 'Two Stars ';
    }
    if (filtered.one) {
      filters += 'One Star ';
    }
    filters.slice(-1);
    if (filtered.five
      || filtered.four
      || filtered.three
      || filtered.two
      || filtered.one) {
      return (
        <span id="appliedFilters">Applied Filters: {filters}<button className="linkButtons" onClick={clearFilters}>Clear Filters</button></span>
      );
    }
    return null;
  };

  const totalReviews = reviews.length;
  let oneStarReviews = 0;
  let twoStarReviews = 0;
  let threeStarReviews = 0;
  let fourStarReviews = 0;
  let fiveStarReviews = 0;
  let recommended = 0;

  for (let i = 0; i < reviews.length; i++) {
    if (reviews[i].rating === 1) {
      oneStarReviews++;
    } else if (reviews[i].rating === 2) {
      twoStarReviews++;
    } else if (reviews[i].rating === 3) {
      threeStarReviews++;
    } else if (reviews[i].rating === 4) {
      fourStarReviews++;
    } else if (reviews[i].rating === 5) {
      fiveStarReviews++;
    }
    if (reviews[i].recommend === true) {
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

  if (reviews.length === 0) {
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
          setFiltered({
            'one': filtered.one, 'two': filtered.two, 'three': filtered.three, 'four': filtered.four, 'five': !filtered.five
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
          setFiltered({
            'one': filtered.one, 'two': filtered.two, 'three': filtered.three, 'four': !filtered.four, 'five': filtered.five
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
          setFiltered({
            'one': filtered.one, 'two': filtered.two, 'three': !filtered.three, 'four': filtered.four, 'five': filtered.five
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
          setFiltered({
            'one': filtered.one, 'two': !filtered.two, 'three': filtered.three, 'four': filtered.four, 'five': filtered.five
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
          setFiltered({
            'one': !filtered.one, 'two': filtered.two, 'three': filtered.three, 'four': filtered.four, 'five': filtered.five
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
