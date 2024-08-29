import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CardCarrousel from '@Components/CardCarrousel';
import { Card } from '@Components/CardCarrousel/types';
import { useState } from 'react';

import { defaultCards } from '@Utils/cards';

describe('CardCarrousel Component', () => {
  const Wrapper = () => {
    const [selectedCard, setSelectedCard] = useState<Card>(defaultCards[0]);
 
    return (
      <React.Fragment> 
        <CardCarrousel
          cards={defaultCards}
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
          defaultCard={defaultCards[0]}
        />
      </React.Fragment>
    );
  };

  it('renders all cards', () => {
    render(<Wrapper />); 
    defaultCards.forEach((card) => {
      expect(screen.getByAltText(card.title)).toBeInTheDocument();
    });
  });

  it('applies the correct CSS classes to the selected card', () => {
    render(<Wrapper />);
    const selectedCardImage = screen.getByAltText(defaultCards[0].title);
    expect(selectedCardImage.parentElement).toHaveClass('z-10 scale-110');
  });

  it('changes the selected card when a different card is clicked', () => {
    render(<Wrapper />);

    const secondCardImage = screen.getByAltText(defaultCards[1].title);
    fireEvent.click(secondCardImage);

    expect(secondCardImage.parentElement).toHaveClass('z-10 scale-110');

    const firstCardImage = screen.getByAltText(defaultCards[0].title);
    expect(firstCardImage.parentElement).not.toHaveClass('z-10 scale-110');
  });

  it('reverts to default card when selected card is not found', () => {
    render(<Wrapper />);

    const secondCardImage = screen.getByAltText(defaultCards[1].title);
    fireEvent.click(secondCardImage);

    fireEvent.click(secondCardImage);

    const firstCardImage = screen.getByAltText(defaultCards[0].title);
    expect(firstCardImage.parentElement).toHaveClass('z-10 scale-110');
  });
});
