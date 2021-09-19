import React from 'react';
import PropTypes from 'prop-types';

export default function StylePrice({ currentStyle }) {
  function discount() {
    return (
      <span>
        <span id="discounted-price">{currentStyle.sale_price}</span>
        <span id="original-price">{currentStyle.original_price}</span>
      </span>
    );
  }

  return (
    <div className="price">$
      {(currentStyle.sale_price === null)
        ? <span>{currentStyle.original_price}</span>
        : discount()}
    </div>
  );
}

StylePrice.propTypes = {
  currentStyle: PropTypes.shape.isRequired
};
