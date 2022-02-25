import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app description', async () => {
  render(<App />);
  const linkElement = await screen.findByText(`Acme Employee Directory`);
  expect(linkElement).toBeInTheDocument();
});
