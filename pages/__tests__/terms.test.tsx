import { render, screen } from '@testing-library/react';
import Terms from '../terms';

test('renders Terms & Conditions heading', () => {
  render(<Terms />);
  const heading = screen.getByText(/Terms & Conditions/i);
  expect(heading).toBeInTheDocument();
});
