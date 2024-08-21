import { useDispatch, useSelector } from 'react-redux';

import CardCarrousel, { Card } from '@Components/CardCarrousel';
import Container from '@Components/layout/Container';
import type { GamesReducer } from '@ProjectRedux/games/gamesTypes';
import { useState } from 'react';

const cardss : Card[] = [
  {
    id: 1,
    title: 'League Of Legends',
    image: 'https://s.zst.com.br/cms-assets/2022/03/-capalolrq-league-of-legends-requisitos-minimos-capa-1-.webp'
  },
  {
    id: 2,
    title: 'Team Fight Tatics',
    image: "https://miro.medium.com/v2/resize:fit:1200/1*uIX2cnzRkgYSRR6NEmnarQ.jpeg"
  },
  {
    id: 3,
    title: 'Valorant',
    image: "https://s2-ge.glbimg.com/N7BSSNFFK-QSWrgf0n_e0piPtDo=/0x0:2560x1440/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2020/4/G/xXHeVfTGe4bMldoEdMRQ/valorant-riot-games.jpg"
  },
]
export default function ChooseAgame() {
  const [cards, setCards] = useState(cardss);

  const selectedGame = useSelector(
    (state: GamesReducer) => state.games.selectedGame,
  );

  const dispatch = useDispatch();

  return (
    <Container>
      <CardCarrousel cards={cards} setCards={setCards}/>
    </Container>
  );
}
