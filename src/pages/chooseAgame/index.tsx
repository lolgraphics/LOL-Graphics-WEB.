import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { defaultCards } from './utils';
import CardCarrousel, { Card } from '@Components/CardCarrousel';
import Button from '@Components/Button';
import Container from '@Components/layout/Container';
import type { GamesReducer } from '@ProjectRedux/games/gamesTypes';

export default function ChooseAgame() {
  const [selectedCard, setSelectedCard] = useState<Card>(defaultCards[0]);
  const [cards, setCards] = useState(defaultCards);

  const selectedGame = useSelector((state: GamesReducer) => state.games.selectedGame);

  return (
    <Container className={selectedCard.colorPallete}>
      <CardCarrousel
        cards={cards}
        setCards={setCards}
        selectedCard={selectedCard}
        setSelectedCard={setSelectedCard}
      />
      <div className="riot-container">
        <Button className="riot-button" label="Analisar"/>
      </div>
    </Container>
  );
}
