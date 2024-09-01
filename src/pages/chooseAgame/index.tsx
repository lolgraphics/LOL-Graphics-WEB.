import { useState } from 'react';
         
import CardCarrousel from '@Components/CardCarrousel';
import { Card } from '@Components/CardCarrousel/types';
import Button from '@Components/Button';
import Container from '@Components/layout/Container';
import { defaultCards } from '@Utils/cards';
 
const firstCard = defaultCards[0];
export default function ChooseAgame() {
  const [selectedCard, setSelectedCard] = useState<Card>(firstCard);
 
  return <Container className={selectedCard.colorPallete}>
      <CardCarrousel
        dataTestId="choose a game card carrousel"
        cards={defaultCards}
        defaultCard={firstCard} 
        selectedCard={selectedCard}
        setSelectedCard={setSelectedCard}
      />
      <div className="riot-container">
        <Button className="riot-button" label="Analisar" data-testid="choose a game button"/>
      </div>
    </Container>
}
