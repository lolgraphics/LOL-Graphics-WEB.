import { Dispatch, SetStateAction } from 'react';

export interface Card {
    id: number;
    title: string;
    image: string;
    colorPallete: string;
}
  
export type CardCarrouselProps = {
    cards: Card[];
    selectedCard: Card,
    defaultCard: Card,
    dataTestId?: string;
    setSelectedCard: Dispatch<SetStateAction<Card>>;
  };