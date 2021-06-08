import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App component', () => {
  render(<App />);
  const navHeading = screen.getByText(/Feelin' My Shelf/i);
  expect(navHeading).toBeInTheDocument();
});

test('renders Home component', () => {
  render(<App />);
  const summaryTitle = screen.getByText(/the fifth season/i);
  expect(summaryTitle).toBeInTheDocument();
});

test('renders link to PostFull component', () => {
  render(<App />);
  const postLink = screen.getByText('The Fifth Season').closest('a');
  expect(postLink).toBeInTheDocument();
});
