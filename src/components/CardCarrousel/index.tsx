import { useEffect, useMemo } from 'react';
import { CardCarrouselProps } from './types';

export default function CardCarrousel({
  cards,
  selectedCard,
  setSelectedCard,
  defaultCard,
  dataTestId
}: CardCarrouselProps): JSX.Element {
  const selectedIndex = useMemo(() => cards.findIndex((card) => card.id === selectedCard.id), [selectedCard.id]);

  const handleSelect = (index: number) => {
    setSelectedCard(cards[index] || defaultCard);
  };

  const getCardPosition = (index: number) => {
    const position = index - selectedIndex;

    if (position === 0) {
      return 'z-10 scale-110';
    } else if (position === -1 || (position === cards.length - 1 && selectedIndex === 0)) {
      return 'translate-x-[-150%] opacity-50 z-0';
    } else if (position === 1 || (position === -cards.length + 1 && selectedIndex === cards.length - 1)) {
      return 'translate-x-[150%] opacity-50 z-0';
    } else {
      return 'opacity-0';
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    const index = getIndex(e.key);
    if (index >= 0 && index < cards.length) {
      handleSelect(index);
    }
  };

  const getIndex = (key: string): number => {
    switch (key) {
      case 'ArrowRight':
        return (selectedIndex + 1) % cards.length;
      case 'ArrowLeft':
        return (selectedIndex - 1 + cards.length) % cards.length;
      default:
        return selectedIndex;
    }
  };

  useEffect(() => {
    const handleKeyDownWrapper = (e: KeyboardEvent) => handleKeyDown(e);

    document.addEventListener('keydown', handleKeyDownWrapper);
    return () => document.removeEventListener('keydown', handleKeyDownWrapper);
  }, [selectedIndex, cards.length]); // Dependências ajustadas para prevenir chamadas desnecessárias

  return (
    <div
      className="relative flex justify-center items-center h-[90%] overflow-hidden transition-transform duration-500 ease-in-out"
      data-testid={dataTestId}
    >
      {cards.map((card, index) => (
        <div
          key={`card-${card.id}`}
          id={`card-${card.id}`}
          data-testid={`card-${card.id}`}
          role="button"
          tabIndex={0}
          className={`
            absolute transition-all duration-500 ease-in-out cursor-pointer 
            ${getCardPosition(index)}
            rounded-lg shadow-lg w-5/12
          `}
          onClick={() => handleSelect(index)}
          onKeyUp={() => handleSelect(index)}
        >
          <img
            src={card.image}
            alt={card.title}
            className="h-[500px] rounded-lg w-full"
          />
        </div>
      ))}
    </div>
  );
}
