import React, { useMemo } from 'react';
import {CardCarrouselProps} from './types';
 
export default function CardCarrousel({cards, selectedCard, setSelectedCard, defaultCard}: CardCarrouselProps) : JSX.Element {
  const selectedIndex = useMemo(()=> cards.findIndex((card) => card.id === selectedCard.id), [selectedCard.id]);

  const handleSelect = (index: number) => {
    setSelectedCard(cards.find((_, key) => key === index) || defaultCard);
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

  return (
    <React.Fragment>
    <div className="relative flex justify-center items-center h-[90%] overflow-hidden transition-transform duration-500 ease-in-out">
        {cards.map((card, index) => (
          <div
          key={card.id}
          className={`
            absolute transition-all duration-500 ease-in-out cursor-pointer 
            ${getCardPosition(index)}
            rounded-lg shadow-lg w-5/12
            `}
            onClick={() => handleSelect(index)}
            >
            <img
              src={card.image}
              alt={card.title}
              className="h-[500px] rounded-lg w-full"
              />
          </div>
        ))}
    </div>
    </React.Fragment>
  );
}
