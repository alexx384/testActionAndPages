import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

it('renders hello world', () => {
  render(<App />);
  const helloWorldElement = screen.getByText(/Hello World/i);
  screen.debug();
  expect(helloWorldElement).toBeInTheDocument();
});
