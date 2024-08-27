import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

import type { GamesState } from './gamesTypes'

const initialState : GamesState = {
    games: ['League of legends', 'Valorant', 'Team Fight Tatics'],
    selectedGame: 'Leage of legends'
};

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        selectGame: (state, action : PayloadAction) => {
            action
            state.selectedGame = 'Valorant';
        }
    }
})

export const { selectGame } = gameSlice.actions;

export default gameSlice.reducer;