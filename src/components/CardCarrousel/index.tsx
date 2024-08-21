import { useState, useEffect } from 'react';

export type Card = {
  id: number;
  title: string;
  image: string;
};

type CardCarrouselProps = {
  cards: Card[];
  autoPlayInterval?: number;
};

export default function CardCarrousel({ cards, autoPlayInterval = 3000 }: CardCarrouselProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const handleSelect = (direction: number) => {
    if (!transitioning) {
      setTransitioning(true);
      setSelectedIndex((prevIndex) => (prevIndex + direction + cards.length) % cards.length);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleSelect(1); // Automatically move to the right
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlayInterval, cards.length, selectedIndex]);

  useEffect(() => {
    if (transitioning) {
      const timer = setTimeout(() => setTransitioning(false), 500); // Duration of the animation
      return () => clearTimeout(timer);
    }
  }, [transitioning]);

  const getCardStyle = (index: number, card : Card) => {
    const position = (index - selectedIndex + cards.length) % cards.length;

    console.log(index, position, card.title);

    if (position === 0) {
      return 'transform scale-110 z-10'; // Center card
    } else if (position === 1 || (position === -cards.length + 1 && selectedIndex === cards.length - 1)) {
      return 'transform translate-x-full opacity-50 z-0'; // Card that will move to the center (from right)
    } else if (position === cards.length - 1 || (position === 1 && selectedIndex === 0)) {
      return 'transform -translate-x-full opacity-50 z-0'; // Card that will move to the center (from left)
    } else {
      return 'hidden'; // Hide other cards
    }
  };

  return (
    <div className="relative flex justify-center items-center h-screen w-screen overflow-hidden">
      <div className="relative flex items-center transition-transform duration-500 ease-in-out">
        <button onClick={() => handleSelect(-1)} className="absolute left-0">{"<"}</button>
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`cursor-pointer p-1 mx-4 w-25 ${getCardStyle(index, card)} rounded-lg shadow-lg bg-white text-gray-800 transition-transform duration-500 ease-in-out`}
            onClick={() => handleSelect(index < selectedIndex ? -1 : 1)} // Move left or right depending on click
          >
            <h1>{card.title}</h1>
            {/* <img src={card.image} alt={card.title} className="h-80 w-auto rounded-lg" /> */}
          </div>
        ))}
        <button onClick={() => handleSelect(1)} className="absolute right-0">{">"}</button>
      </div>
    </div>
  );
}