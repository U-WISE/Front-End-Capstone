import React, { useEffect, useContext } from 'react';
import { reviewsContext } from '../../contexts/index.js';

const ProductCharacteristics = () => {
  const { reviewsMeta } = useContext(reviewsContext);

  const sizeCharacteristics = () => {
    if (reviewsMeta.characteristics.Size !== undefined) {
      return (
        <div className="characteristics-wrapper" id="size">
          <span className="characteristicsLabel" id="sizeLabel">Size</span>
          <div className="borderBar characteristicsBar" id="sizeBar"><div className="triangle" style={{ 'left': `calc((${(Number(reviewsMeta.characteristics.Size.value) - 1).toString()}% * 25) - 10px)` }}></div></div>
          <span className="leftEnd sizeRating">Too small</span>
          <span className="middleEnd sizeRating">Perfect</span>
          <span className="rightEnd sizeRating">Too large</span>
        </div>
      );
    }
    return null;
  };

  const widthCharacteristics = () => {
    if (reviewsMeta.characteristics.Width !== undefined) {
      return (
        <div className="characteristics-wrapper" id="width">
          <span className="characteristicsLabel" id="widthLabel">Width</span>
          <div className="borderBar characteristicsBar" id="widthBar"><div className="triangle" style={{ 'left': `calc((${(Number(reviewsMeta.characteristics.Width.value) - 1).toString()}% * 25) - 10px)` }}></div></div>
          <span className="leftEnd widthRating">Too narrow</span>
          <span className="middleEnd widthRating">Perfect</span>
          <span className="rightEnd widthRating">Too wide</span>
        </div>
      );
    }
    return null;
  };

  const lengthCharacteristics = () => {
    if (reviewsMeta.characteristics.Length !== undefined) {
      return (
        <div className="characteristics-wrapper" id="length">
          <span className="characteristicsLabel" id="lengthLabel">Length</span>
          <div className="borderBar characteristicsBar" id="lengthBar"><div className="triangle" style={{ 'left': `calc((${(Number(reviewsMeta.characteristics.Length.value) - 1).toString()}% * 25) - 10px)` }}></div></div>
          <span className="leftEnd lengthRating">Too short</span>
          <span className="middleEnd lengthRating">Perfect</span>
          <span className="rightEnd lengthRating">Too long</span>
        </div>
      );
    }
    return null;
  };

  const fitCharacteristics = () => {
    if (reviewsMeta.characteristics.Fit !== undefined) {
      return (
        <div className="characteristics-wrapper" id="fit">
          <span className="characteristicsLabel" id="fitLabel">Fit</span>
          <div className="borderBar characteristicsBar" id="fitBar"><div className="triangle" style={{ 'left': `calc((${(Number(reviewsMeta.characteristics.Fit.value) - 1).toString()}% * 25) - 10px)` }}></div></div>
          <span className="leftEnd fitRating">Too tight</span>
          <span className="middleEnd fitRating">Perfect</span>
          <span className="rightEnd fitRating">Too loose</span>
        </div>
      );
    }
    return null;
  };

  const qualityCharacteristics = () => {
    if (reviewsMeta.characteristics.Quality !== undefined) {
      return (
        <div className="characteristics-wrapper" id="quality">
          <span className="characteristicsLabel" id="qualityLabel">Quality</span>
          <div className="borderBar characteristicsBar" id="qualityBar"><div className="triangle" style={{ 'left': `calc((${(Number(reviewsMeta.characteristics.Quality.value) - 1).toString()}% * 25) - 10px)` }}></div></div>
          <span className="leftEnd qualityRating">Poor</span>
          <span className="middleEnd qualityRating">Average</span>
          <span className="rightEnd qualityRating">Perfect</span>
        </div>
      );
    }
    return null;
  };

  const comfortCharacteristics = () => {
    if (reviewsMeta.characteristics.Comfort !== undefined) {
      return (
        <div className="characteristics-wrapper" id="comfort">
          <span className="characteristicsLabel" id="comfortLabel">Comfort</span>
          <div className="borderBar characteristicsBar" id="comfortBar"><div className="triangle" style={{ 'left': `calc((${(Number(reviewsMeta.characteristics.Comfort.value) - 1).toString()}% * 25) - 10px)` }}></div></div>
          <span className="leftEnd comfortRating">Uncomfortable</span>
          <span className="middleEnd comfortRating">Okay</span>
          <span className="rightEnd comfortRating">Perfect</span>
        </div>
      );
    }
    return null;
  };

  if (reviewsMeta.length === 0) {
    return <div>loading...</div>;
  }
  return (
    <div id="productCharacteristics">
      <h5 id="characteristics">Product Characteristics</h5>
      {sizeCharacteristics()}
      {widthCharacteristics()}
      {lengthCharacteristics()}
      {fitCharacteristics()}
      {qualityCharacteristics()}
      {comfortCharacteristics()}
    </div>
  );
};
export default ProductCharacteristics;
