import axios from 'axios';

// Ratings Breakdown utils
export const clearFilters = (setFiltered) => {
  setFiltered({
    'one': false, 'two': false, 'three': false, 'four': false, 'five': false
  });
};

export const getReviewData = (reviews) => {
  const reviewData = {
    totalReviews: reviews.length,
    oneStarReviews: 0,
    twoStarReviews: 0,
    threeStarReviews: 0,
    fourStarReviews: 0,
    fiveStarReviews: 0,
    recommended: 0,
    onePercentage: 0,
    twoPercentage: 0,
    threePercentage: 0,
    fourPercentage: 0,
    fivePercentage: 0,
    ratingNumber: 0
  };

  for (let i = 0; i < reviews.length; i++) {
    if (reviews[i].rating === 1) {
      reviewData.oneStarReviews++;
    } else if (reviews[i].rating === 2) {
      reviewData.twoStarReviews++;
    } else if (reviews[i].rating === 3) {
      reviewData.threeStarReviews++;
    } else if (reviews[i].rating === 4) {
      reviewData.fourStarReviews++;
    } else if (reviews[i].rating === 5) {
      reviewData.fiveStarReviews++;
    }
    if (reviews[i].recommend === true) {
      reviewData.recommended++;
    }
  }

  reviewData.recommended = ((reviewData.recommended / reviewData.totalReviews) * 100).toFixed(1);
  if (reviewData.recommended === 'NaN') {
    reviewData.recommended = 0;
  }
  reviewData.onePercentage = Math.round(
    (reviewData.oneStarReviews / reviewData.totalReviews) * 100
  );
  reviewData.twoPercentage = Math.round(
    (reviewData.twoStarReviews / reviewData.totalReviews) * 100
  );
  reviewData.threePercentage = Math.round(
    (reviewData.threeStarReviews / reviewData.totalReviews) * 100
  );
  reviewData.fourPercentage = Math.round(
    (reviewData.fourStarReviews / reviewData.totalReviews) * 100
  );
  reviewData.fivePercentage = Math.round(
    (reviewData.fiveStarReviews / reviewData.totalReviews) * 100
  );
  reviewData.ratingNumber = (
    (reviewData.oneStarReviews * 1
    + reviewData.twoStarReviews * 2
    + reviewData.threeStarReviews * 3
    + reviewData.fourStarReviews * 4
    + reviewData.fiveStarReviews * 5)
    / reviewData.totalReviews
  );
  reviewData.ratingNumber = reviewData.ratingNumber.toFixed(1);
  if (reviewData.ratingNumber === 'NaN') {
    reviewData.ratingNumber = 0;
  }
  return reviewData;
};

export const makeFiltersLabel = (filtered) => {
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
  return filters;
};

// review utils

export const getDate = (inDate) => {
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

export const handleReport = (event, reviewId) => {
  event.preventDefault();
  console.log('reported');
  axios.put(`/reviews/${reviewId}/report`)
    .then((response) => {
    // console.log(response)
    })
    .catch((error) => console.log(error));
};

export const handleYes = (event, review, reviewHelpfulness, setReviewHelpfulness) => {
  event.preventDefault();
  const reviewId = review.review_id;
  if (localStorage.getItem(`clickedHelpfulReview_${reviewId}`) === null) {
    axios.put(`/reviews/${reviewId}/helpful`)
      .then((response) => {
        setReviewHelpfulness(reviewHelpfulness + 1);
      })
      .catch((error) => console.log(error));
    localStorage.setItem(`clickedHelpfulReview_${reviewId}`, true);
  }
};

// modal utils
export const displayStarDescription = (rating) => {
  if (rating === 1) {
    return ' Poor';
  }
  if (rating === 2) {
    return ' Fair';
  }
  if (rating === 3) {
    return ' Average';
  }
  if (rating === 4) {
    return ' Good';
  }
  if (rating === 5) {
    return ' Great';
  }
  return '';
};

export const displayRatingDefinition = (characteristic, rating) => {
  const characteristics = {
    Size: {
      0: 'none selected',
      1: 'A size too small',
      2: 'A half size too small',
      3: 'Perfect',
      4: 'A half size too large',
      5: 'a size too large'
    },
    Width: {
      0: 'none selected',
      1: 'Too narrow',
      2: 'slightly too narrow',
      3: 'Perfect',
      4: 'slighty too wide',
      5: 'Too wide'
    },
    Length: {
      0: 'none selected',
      1: 'Runs short',
      2: 'Runs slightly short',
      3: 'Perfect',
      4: 'Runs slightly long',
      5: 'Runs long'
    },
    Fit: {
      0: 'none selected',
      1: 'fits tight',
      2: 'fits slightly tight',
      3: 'Perfect',
      4: 'fits slightly loose',
      5: 'fits loose'
    },
    Quality: {
      0: 'none selected',
      1: 'Poor',
      2: 'Below average',
      3: 'Average',
      4: 'Above average',
      5: 'Perfect'
    },
    Comfort: {
      0: 'none selected',
      1: 'Uncomfortable',
      2: 'Slightly uncomfortable',
      3: 'Okay',
      4: 'Comfortable',
      5: 'Perfect'
    }
  };
  return characteristics[characteristic][rating];
};

export const toggleModal = (visibility, setVisibility) => {
  if (visibility === 'hidden') {
    setVisibility('visible');
  }
  if (visibility === 'visible') {
    setVisibility('hidden');
  }
};

export const handleSubmit = (event, formData) => {
  event.preventDefault();
  const characteristicsData = {};
  const keys = Object.keys(formData.reviewsMeta.characteristics);
  for (let i = 0; i < keys.length; i++) {
    if (keys[i] === 'Size') {
      characteristicsData[formData.reviewsMeta.characteristics.Size.id] = formData.sizeRating;
    } else if (keys[i] === 'Width') {
      characteristicsData[formData.reviewsMeta.characteristics.Width.id] = formData.widthRating;
    } else if (keys[i] === 'Length') {
      characteristicsData[formData.reviewsMeta.characteristics.Length.id] = formData.lengthRating;
    } else if (keys[i] === 'Fit') {
      characteristicsData[formData.reviewsMeta.characteristics.Fit.id] = formData.fitRating;
    } else if (keys[i] === 'Quality') {
      characteristicsData[formData.reviewsMeta.characteristics.Quality.id] = formData.qualityRating;
    } else if (keys[i] === 'Comfort') {
      characteristicsData[formData.reviewsMeta.characteristics.Comfort.id] = formData.comfortRating;
    }
  }
  const formSubmission = {
    'product_id': formData.product.id,
    'rating': formData.overallRating,
    'summary': formData.summary,
    'body': formData.reviewBody,
    'recommend': formData.recommend,
    'name': formData.name,
    'email': formData.email,
    'photos': formData.photos,
    'characteristics': characteristicsData
  };
  axios.post('/reviews', formSubmission)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });
};

export const handleChange = () => {

};

export const handlePhotos = () => {
  console.log('this will handle photo uploads');
};

// star Rating utils

export const getStarRating = (rating) => {
  const ratings = {};
  if (rating >= 1 && rating < 1.25) {
    ratings.one = '100%';
    ratings.two = '0%';
    ratings.three = '0%';
    ratings.four = '0%';
    ratings.five = '0%';
  }
  if (rating >= 1.25 && rating < 1.51) {
    ratings.one = '100%';
    ratings.two = '40%';
    ratings.three = '0%';
    ratings.four = '0%';
    ratings.five = '0%';
  }
  if (rating >= 1.50 && rating < 1.76) {
    ratings.one = '100%';
    ratings.two = '50%';
    ratings.three = '0%';
    ratings.four = '0%';
    ratings.five = '0%';
  }
  if (rating >= 1.75 && rating < 2) {
    ratings.one = '100%';
    ratings.two = '60%';
    ratings.three = '0%';
    ratings.four = '0%';
    ratings.five = '0%';
  }
  if (rating >= 2 && rating < 2.25) {
    ratings.one = '100%';
    ratings.two = '100%';
    ratings.three = '0%';
    ratings.four = '0%';
    ratings.five = '0%';
  }
  if (rating >= 2.25 && rating < 2.51) {
    ratings.one = '100%';
    ratings.two = '100%';
    ratings.three = '40%';
    ratings.four = '0%';
    ratings.five = '0%';
  }
  if (rating >= 2.50 && rating < 2.76) {
    ratings.one = '100%';
    ratings.two = '100%';
    ratings.three = '50%';
    ratings.four = '0%';
    ratings.five = '0%';
  }
  if (rating >= 2.75 && rating < 3) {
    ratings.one = '100%';
    ratings.two = '100%';
    ratings.three = '60%';
    ratings.four = '0%';
    ratings.five = '0%';
  }
  if (rating >= 3 && rating < 3.25) {
    ratings.one = '100%';
    ratings.two = '100%';
    ratings.three = '100%';
    ratings.four = '0%';
    ratings.five = '0%';
  }
  if (rating >= 3.25 && rating < 3.51) {
    ratings.one = '100%';
    ratings.two = '100%';
    ratings.three = '100%';
    ratings.four = '40%';
    ratings.five = '0%';
  }
  if (rating >= 3.50 && rating < 3.76) {
    ratings.one = '100%';
    ratings.two = '100%';
    ratings.three = '100%';
    ratings.four = '50%';
    ratings.five = '0%';
  }
  if (rating >= 3.75 && rating < 4) {
    ratings.one = '100%';
    ratings.two = '100%';
    ratings.three = '100%';
    ratings.four = '60%';
    ratings.five = '0%';
  }
  if (rating >= 4 && rating < 4.25) {
    ratings.one = '100%';
    ratings.two = '100%';
    ratings.three = '100%';
    ratings.four = '100%';
    ratings.five = '0%';
  }
  if (rating >= 4.25 && rating < 4.51) {
    ratings.one = '100%';
    ratings.two = '100%';
    ratings.three = '100%';
    ratings.four = '100%';
    ratings.five = '40%';
  }
  if (rating >= 4.50 && rating < 4.76) {
    ratings.one = '100%';
    ratings.two = '100%';
    ratings.three = '100%';
    ratings.four = '100%';
    ratings.five = '50%';
  }
  if (rating >= 4.75 && rating < 5) {
    ratings.one = '100%';
    ratings.two = '100%';
    ratings.three = '100%';
    ratings.four = '100%';
    ratings.five = '60%';
  }
  if (rating === 5) {
    ratings.one = '100%';
    ratings.two = '100%';
    ratings.three = '100%';
    ratings.four = '100%';
    ratings.five = '100%';
  }
  return ratings;
};
