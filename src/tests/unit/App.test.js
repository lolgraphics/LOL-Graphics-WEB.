import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';  // for extended matchers
import App from '../../src/App';  // adjust the import path based on your project structure

test('renders the App component', () => {
  render(<App />);
  const element = screen.getByText(/lol graphics/i);
  expect(element).toBeInTheDocument();
  expect(element).toHaveStyle('background-color: black');
});
