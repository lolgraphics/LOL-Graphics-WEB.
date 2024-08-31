import { render, screen } from '@testing-library/react';
import ChooseAgame from '@Pages/chooseAgame';

describe('ChooseAgame Page', () => {
  it('renders the CardCarrousel component', () => {
    render(<ChooseAgame />);
    
    expect(screen.getByTestId('choose a game card carrousel')).toBeInTheDocument();
  });

  it('renders the Button component with correct label', () => {
    render(<ChooseAgame />);
    
    expect(screen.getByTestId('choose a game button')).toHaveTextContent('Analisar');
  });
});
