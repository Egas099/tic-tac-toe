export interface GameState {
    field: string[];
    xMove: boolean;
    endGame: boolean;
    title: string;
}

export enum GameActionType {
    PLAYER_MOVE = 'PLAYER_MOVE',
    RESTART_GAME = 'RESTART_GAME',
    CHANGE_TITLE = 'CHANGE_TITLE',
}

export interface PlayerMove {
    type: GameActionType.PLAYER_MOVE;
    payload: number;
}

export interface RestartGame {
    type: GameActionType.RESTART_GAME;
    payload: undefined;
}

export interface ChangeTitle {
    type: GameActionType.CHANGE_TITLE;
    payload: string;
}

export type GameActions = PlayerMove | RestartGame | ChangeTitle;

export enum Winner {
    X,
    O,
    Tie,
}
export type IndexedLine = [
    number,
    number,
    number,
]