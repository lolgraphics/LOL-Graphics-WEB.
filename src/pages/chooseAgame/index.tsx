import { useSelector, useDispatch } from 'react-redux'

//import {Card} from '../../components/Card';
import Card from '@Components/Card';
import type { GamesReducer } from '../../redux/games/gamesTypes';
import { selectGame } from '../../redux/games/gameSlice';

export default function ChooseAgame() {
    const selectedGame = useSelector((state: GamesReducer) => state.games.selectedGame);

    console.log(selectedGame);
    const dispatch = useDispatch()

    return <Card title='League of legends'> <span>League of legends</span></Card>
}