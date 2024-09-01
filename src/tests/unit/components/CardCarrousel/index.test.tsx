import { useState } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'; // Importar o userEvent para simular eventos do teclado

import CardCarrousel from '@Components/CardCarrousel';
import { Card } from '@Components/CardCarrousel/types';
import { defaultCards } from '@Utils/cards';

describe('CardCarrousel Component', () => {
  const Wrapper = () => {
    const [selectedCard, setSelectedCard] = useState<Card>(defaultCards[0]);

    return (
      <CardCarrousel
        cards={defaultCards}
        defaultCard={defaultCards[0]}
        selectedCard={selectedCard}
        setSelectedCard={setSelectedCard}
        dataTestId="card-carrousel"
      />
    );
  };

  it('renders all cards', () => {
    render(<Wrapper />);
    defaultCards.forEach((card) => {
      expect(screen.getByTestId(`card-${card.id}`)).toBeInTheDocument();
    });
  });

  it('applies the correct CSS classes to the selected card', () => {
    render(<Wrapper />);
    const selectedFirstCard = screen.getByTestId(`card-${defaultCards[0].id}`);
    expect(selectedFirstCard).toHaveClass('z-10 scale-110');
  });

  it('changes the selected card when a different card is clicked', () => {
    render(<Wrapper />);
    
    const selectedSecondCard = screen.getByTestId(`card-${defaultCards[1].id}`);
    fireEvent.click(selectedSecondCard);
    
    expect(selectedSecondCard).toHaveClass('z-10 scale-110');

    const selectedFirstCard = screen.getByTestId(`card-${defaultCards[0].id}`);
    expect(selectedFirstCard).not.toHaveClass('z-10 scale-110');
  });

  it('changes the selected card with arrow keys', () => {
    render(<Wrapper />);

    const carrouselContainer = screen.getByTestId('card-carrousel');

    const selectedFirstCard = screen.getByTestId(`card-${defaultCards[0].id}`);
    expect(selectedFirstCard).toHaveClass('z-10 scale-110');

    userEvent.type(carrouselContainer, '{arrowright}');
    
    const selectedSecondCard = screen.getByTestId(`card-${defaultCards[1].id}`);
    expect(selectedSecondCard).toHaveClass('z-10 scale-110');
    expect(selectedFirstCard).not.toHaveClass('z-10 scale-110');

    userEvent.type(carrouselContainer, '{arrowleft}');
    
    expect(selectedFirstCard).toHaveClass('z-10 scale-110');
    expect(selectedSecondCard).not.toHaveClass('z-10 scale-110');
  });
});
