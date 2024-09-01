import { useState } from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
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
        dataTestId="card-carrousel" // Adicione um data-testid para o contêiner principal
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

  it('changes the selected card with arrow keys', async () => {
    render(<Wrapper />);

    // Acesse o contêiner principal do carrossel para simular eventos de teclado
    const carrouselContainer = screen.getByTestId('card-carrousel');

    // Verifica o estado inicial
    const selectedFirstCard = screen.getByTestId(`card-${defaultCards[0].id}`);
    expect(selectedFirstCard).toHaveClass('z-10 scale-110');

    // Simula pressionamento da tecla "ArrowRight" para selecionar o próximo cartão
    userEvent.type(carrouselContainer, '{arrowright}');

    // Aguarda o DOM atualizar
    await waitFor(() => {
      const selectedSecondCard = screen.getByTestId(`card-${defaultCards[1].id}`);
      expect(selectedSecondCard).toHaveClass('z-10 scale-110');
      expect(selectedFirstCard).not.toHaveClass('z-10 scale-110');
    });

    // Simula pressionamento da tecla "ArrowLeft" para retornar ao primeiro cartão
    userEvent.type(carrouselContainer, '{arrowleft}');

    // Aguarda o DOM atualizar
    await waitFor(() => {
      expect(selectedFirstCard).toHaveClass('z-10 scale-110');
      const selectedSecondCard = screen.getByTestId(`card-${defaultCards[1].id}`);
      expect(selectedSecondCard).not.toHaveClass('z-10 scale-110');
    });
  });
});
