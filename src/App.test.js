import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the default content and navigation links', () => {
  render(<App />);
  const homeLinkElement = screen.getByText(/Home/i);
  expect(homeLinkElement).toBeInTheDocument();
  const aboutLinkElement = screen.getByText(/About/i);
  expect(aboutLinkElement).toBeInTheDocument();
});
