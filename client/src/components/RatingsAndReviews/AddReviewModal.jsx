import React, { useState, useContext } from 'react';
import { reviewsContext } from '../../contexts/index.js';
import { closeModal, handleSubmit, handleChange, handlePhotos, displayStarDescription, displayRatingDefinition } from './utils/RatingsAndReviews.utils.js';
import CharacteristicRadioButtons from './CharacteristicRadioButtons.jsx';

const AddReviewModal = () => {
  const { reviews } = useContext(reviewsContext);
  const [sizeRating, setSizeRating] = useState(0);
  const [widthRating, setWidthRating] = useState(0);
  const [lengthRating, setLengthRating] = useState(0);
  const [fitRating, setFitRating] = useState(0);
  const [qualityRating, setQualityRating] = useState(0);
  const [comfortRating, setComfortRating] = useState(0);
  const [overallRating, setOverallRating] = useState(0);
  const [recommend, setRecommend] = useState(null);

  if (reviews.length === 0) {
    return <div>loading...</div>;
  }
  return (
    <div className="reviewModal" id="addReviewModal">
      <button id="closeModal" className="closeModal" onClick={closeModal}>X</button>
      <h2 id="addReviewTitle">Write your review</h2>
      <h3 id="addReviewSubtitle">About the Product</h3>
      <span className="notice">fields marked with * are required</span>
      <form className="addReview" onSubmit={handleSubmit} onChange={handleChange}>
        <div id="overallRating">
          <label htmlFor="overallRating">* Overall rating:</label>
          <input onChange={() => { setOverallRating(1) }} type="radio" value="1" checked={overallRating === 1}></input>
          <input onChange={() => { setOverallRating(2) }} type="radio" value="2" checked={overallRating === 2}></input>
          <input onChange={() => { setOverallRating(3) }} type="radio" value="3" checked={overallRating === 3}></input>
          <input onChange={() => { setOverallRating(4) }} type="radio" value="4" checked={overallRating === 4}></input>
          <input onChange={() => { setOverallRating(5) }} type="radio" value="5" checked={overallRating === 5}></input>
          <span>{displayStarDescription(overallRating)}</span>
        </div>
        <div id="recommend">
          <label> * Do you recommend this product?</label>
          <label> Yes</label>
          <input onChange={() => { setRecommend('yes') }}type="radio" value="yes" checked={recommend === 'yes'}></input>
          <label> No</label>
          <input onChange={() => { setRecommend('no') }}type="radio" value="no" checked={recommend === 'no'}></input>
        </div>
        <div id="characteristics">
          <CharacteristicRadioButtons rating={sizeRating} setRating={setSizeRating} labelName="Size" />
          <div className="radioMeaning"><span className="leftMeaning">Too small</span> <span className="rightmeaning">Too large</span></div>

          <CharacteristicRadioButtons rating={widthRating} setRating={setWidthRating} labelName="Width" />
          <div className="radioMeaning"><span className="leftMeaning">Too narrow</span> <span className="rightmeaning">Too wide</span></div>

          <CharacteristicRadioButtons rating={lengthRating} setRating={setLengthRating} labelName="Length" />
          <div className="radioMeaning"><span className="leftMeaning">Too short</span> <span className="rightmeaning">Too long</span></div>

          <CharacteristicRadioButtons rating={fitRating} setRating={setFitRating} labelName="Fit" />
          <div className="radioMeaning"><span className="leftMeaning">Too tight</span> <span className="rightmeaning">Too loose</span></div>

          <CharacteristicRadioButtons rating={qualityRating} setRating={setQualityRating} labelName="Quality" />
          <div className="radioMeaning"><span className="leftMeaning">Poor</span> <span className="rightmeaning">Perfect</span></div>

          <CharacteristicRadioButtons rating={comfortRating} setRating={setComfortRating} labelName="Comfort" />
          <div className="radioMeaning"><span className="leftMeaning">Uncomfortable</span> <span className="rightmeaning">Perfect</span></div>
        </div>
        <label id="reviewSummaryLabel" htmlFor="summary">Summary:
          <textarea
            type="textarea"
            min="1"
            max="60"
            rows={3}
            cols={50}
            name="summary"
            id="summary"
            placeholder="ex: Best purchase ever"
          />
        </label>
        <label id="reviewBodyLabel" htmlFor="body">* Review body
          <textarea
            min="50"
            maxLength="1000"
            name="reviewBody"
            rows={5}
            cols={50}
            id="reviewBody"
            placeholder="Why did you like the product, or why not?"
          />
        </label>
        <label id="reviewPhotosLabel" htmlFor="photos">Upload photos
          <input
            multiple
            type="file"
            name="files"
            id="fileInput"
            onChange={handlePhotos}
          />
        </label>
        <label id="reviewNicknameLabel" htmlFor="nickname">* what is your nickname
          <input
            type="text"
            min="3"
            max="60"
            name="nickname"
            id="nickname"
            placeholder="ex: jackson11"
          />
        </label>
        <div id="reviewNicknameNotice" className="notice">For privacy reasons, do not use your full name or email address</div>
        <label id="reviewEmailLabel" htmlFor="email"> what is your email address?
          <input
            type="text"
            min="3"
            max="60"
            name="email"
            id="email"
            placeholder="ex: jackson11@email.com"
          />
        </label>
        <div id="reviewEmailNotice" className="notice">For authentication reasons, you will not be emailed</div>
        <button id="submitReviewButton" onClick={handleSubmit}>Submit review</button>
      </form>
    </div>
  );
};
export default AddReviewModal;

