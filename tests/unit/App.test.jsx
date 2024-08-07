import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import App from '../../src/App';  

test('renders the App component', () => {
  render(<App />);
  const element = screen.getByText(/lol graphics/i);
  expect(element).toBeInTheDocument();
  expect(element).toHaveStyle('background-color: black');
});
