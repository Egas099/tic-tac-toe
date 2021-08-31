import { IndexedLine, Winner } from '../types/game';

const xVinLine = ['X', 'X', 'X'];
const oVinLine = ['O', 'O', 'O'];
const lines: IndexedLine[] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

export function allowedMovesExists(gameField: string[]) {
    return gameField.find((square) => square === '') === undefined ? false : true;
}

function equals(a: string[], b: string[]) {
    return a.find((value, index) => a[index] !== b[index]) === undefined ? true : false;
}

export function findWinners(gameField: string[]): Winner {
    const getLine = (arr: number[]) => arr.map((num) => gameField[num]);

    for (const line of lines) {
        const currentLine = getLine(line);
        switch (true) {
            case equals(currentLine, xVinLine):
                return Winner.X;
            case equals(currentLine, oVinLine):
                return Winner.O;
            default: break;
        }
    }
    return Winner.Tie;
}

export function checkWinners(gameField: string[]) {
    const getLine = (arr: number[]) => arr.map((num) => gameField[num]);
    const findler = (line: number[]) => equals(getLine(line), xVinLine) || equals(getLine(line), oVinLine);

    return lines.find(findler);
}
