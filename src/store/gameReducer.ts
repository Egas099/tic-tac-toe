import { allowedMovesExists, checkWinners } from '../logic/game';
import { GameActions, GameActionType, GameState, PlayerMove } from '../types/game';

const defaultState = (): GameState => ({
    field: ['', '', '', '', '', '', '', '', ''],
    xMove: true,
    endGame: false,
    title: 'X move',
});

export const gameReducer = (state = defaultState(), action: GameActions): GameState => {
    switch (action.type) {
        case GameActionType.PLAYER_MOVE:
            return actionPlayerMove(state, action);
        case GameActionType.RESTART_GAME:
            return defaultState();
        case GameActionType.CHANGE_TITLE:
            return { ...state, title: action.payload };
        default:
            return state;
    }
}

export const playerMove = (payload: number) => ({ type: GameActionType.PLAYER_MOVE, payload })
export const restartGame = () => ({ type: GameActionType.RESTART_GAME, payload: undefined })
export const changeTitle = (payload: string) => ({ type: GameActionType.CHANGE_TITLE, payload })

function actionPlayerMove(state: GameState, action: PlayerMove): GameState {
    // if the field is not occupied and the game is not over.
    if (state.field[action.payload] || state.endGame)
        return state;

    let newGameState = { ...state };
    newGameState.field[action.payload] = (newGameState.xMove ? 'X' : 'O');

    if (checkWinners(newGameState.field))
        newGameState.endGame = true;

    if (allowedMovesExists(newGameState.field))
        newGameState.xMove = !newGameState.xMove;
    else
        newGameState.endGame = true;

    newGameState.title = (newGameState.xMove ? 'X move' : 'O move');
    return newGameState;
}