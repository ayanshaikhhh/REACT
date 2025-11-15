import { render, screen } from '../../../7_pizza-web-app/node_modules/@testing-library/react/types';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
