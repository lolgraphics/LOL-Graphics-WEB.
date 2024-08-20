import { useDispatch, useSelector } from 'react-redux';

import Card from '@Components/Card';
import Container from '@Components/layout/Container';
import type { GamesReducer } from '@ProjectRedux/games/gamesTypes';

export default function ChooseAgame() {
  const selectedGame = useSelector(
    (state: GamesReducer) => state.games.selectedGame,
  );

  const dispatch = useDispatch();

  return (
    <Container>
      <Card
        title="League of legends"
        sx={{ width: 275, backgroundColor: '#000000CC' }}
      >
        <span>League of legends</span>
      </Card>
    </Container>
  );
}
