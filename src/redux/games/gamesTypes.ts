export interface GamesState {
  games: string[],
  selectedGame: string
}

export interface GamesReducer {
  games: GamesState
}