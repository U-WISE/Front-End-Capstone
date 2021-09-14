import React, { useState } from 'react';

export default function Product() {
  const [title, setTitle] = useState('');

  return (
    <div>
      <div className="flex-container">
        <div id="image-gallery">images</div>
        <div id="product-information">
          <div className="review-flex-container">
            <span id="star-checked">★</span>
            <span id="star-checked">★</span>
            <span id="star-checked">★</span>
            <span id="star">★</span>
            <span id="star">★</span>
            <span>
              <h6>Read all reviews</h6>
            </span>
          </div>
          <div>
            <h4>CATEGORY</h4>
          </div>
          <div>
            <h1>Product Name</h1>
          </div>
          <div className="style-selector">
            <input
              type="radio"
            />
            <input
              type="radio"
            />
            <input
              type="radio"
            />
            <input
              type="radio"
            />
          </div>
          <div className="price">$</div>
          <div className="size-quantity">
            <input
              name="size"
              type="number"
              placeholder="Select Size"
            />
            <input
              name="quantity"
              type="number"
              placeholder="1"
            />
          </div>
          <div className="buttons">
            <button>Add to bag</button>
            <button>★</button>
          </div>
        </div>
      </div>
      <div id="product-overview">
        Product description goes here
      </div>
    </div>
  );
}