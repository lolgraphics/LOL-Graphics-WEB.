import { render, screen } from '@testing-library/react';
import Button from '@Components/Button';

describe('Button component', () => {
  it('renders with the correct label', () => {
    const label = 'Click me';

    render(<Button label={label} />);

    expect(screen.getByRole('button')).toHaveTextContent(label);
  });

  it('passes props to the MUIButton component', () => {
    const label = 'Submit';
    const mockOnClick = jest.fn();

    render(<Button label={label} onClick={mockOnClick} disabled={true} />);

    const button = screen.getByRole('button');
    expect(button).toHaveTextContent(label);
    expect(button).toBeDisabled();

    button.click();

    expect(mockOnClick).not.toHaveBeenCalled();
  });
});
