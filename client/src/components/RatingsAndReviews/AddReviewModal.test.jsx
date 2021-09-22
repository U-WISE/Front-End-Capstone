import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import AddReviewModal from './AddReviewModal.jsx';
import { reviewsContext } from '../../contexts/index.js';
import { reviews } from './dummyTestData.json';

test('to be defined"', () => {
  const component = renderer.create(
    <reviewsContext.Provider value={{ reviews }}>
      <AddReviewModal />
    </reviewsContext.Provider>
  );
  expect(component).toBeDefined();
});

test('to undefined', () => {
  const component = renderer.create(
    <reviewsContext.Provider value={{ reviews }}>
      <AddReviewModal />
    </reviewsContext.Provider>
  );
  expect(component.anUndefinedValue).toBeUndefined();
});

test('to match snapshot', () => {
  const component = renderer.create(
    <reviewsContext.Provider value={{ reviews }}>
      <AddReviewModal />
    </reviewsContext.Provider>
  );
  expect(component).toMatchSnapshot();
});