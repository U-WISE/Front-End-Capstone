
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QandA from './Q-and-A/QandA.jsx';
import RatingsReviews from './RatingsAndReviews/RatingsReviews.jsx';
import Product from './Product-overview/Product.jsx';
import { appContext } from '../contexts/index.js';

export default function App() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/products/44388')
      .then(response => setProduct(response.data));
  }, []);

  if (product === null) {
    return (
      <div>
        loading...
      </div>
    );
  }

  return (
    <appContext.Provider value={{ product }}>
      <div>
        {/* <Product /> */}
        <QandA />
        {/* <RatingsReviews /> */}
      </div>
    </appContext.Provider>
  );
}
