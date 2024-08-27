import { useState } from 'react';
//import { useDispatch, useSelector } from 'react-redux';

import CardCarrousel, { Card } from '@Components/CardCarrousel';
import Button from '@Components/Button';
import Container from '@Components/layout/Container';
//import type { GamesReducer } from '@ProjectRedux/games/gamesTypes';

import { defaultCards } from './utils';

const firstCard = defaultCards[0];
export default function ChooseAgame() {
  const [selectedCard, setSelectedCard] = useState<Card>(firstCard);

  // const selectedGame = useSelector((state: GamesReducer) => state.games.selectedGame);

  return <Container className={selectedCard.colorPallete}>
      <CardCarrousel
        cards={defaultCards}
        defaultCard={firstCard}
        selectedCard={selectedCard}
        setSelectedCard={setSelectedCard}
      />
      <div className="riot-container">
        <Button className="riot-button" label="Analisar"/>
      </div>
    </Container>

}
