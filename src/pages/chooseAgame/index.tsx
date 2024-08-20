import { useDispatch, useSelector } from 'react-redux';

//import {Card} from '../../components/Card';
import Card from '@Components/Card';
import type { GamesReducer } from '@ProjectRedux/games/gamesTypes';

export default function ChooseAgame() {
  const selectedGame = useSelector(
    (state: GamesReducer) => state.games.selectedGame,
  );

  const dispatch = useDispatch();

  return (
    <Card title="League of legends">
      <span>League of legends</span>
    </Card>
  );
}
