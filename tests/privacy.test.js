import { render, screen } from '@testing-library/react';
import Privacy from '../pages/privacy';

test('renders Privacy page', () => {
    render(<Privacy />);
    const headerElement = screen.getByText(/Privacy Policy/i);
    expect(headerElement).toBeInTheDocument();
    const paragraphElement = screen.getByText(/This is where you can explain your privacy policy in detail./i);
    expect(paragraphElement).toBeInTheDocument();
});
