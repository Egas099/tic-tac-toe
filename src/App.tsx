import React, { useEffect, useState } from 'react';
import './css/App.css';
import GameBar from './components/UI/GameBar/GameBar';
import GameField from './components/GameField';

function App() {
  const defaultGameState = ['', '', '', '', '', '', '', '', ''];
  const xVinState = ['X', 'X', 'X'];
  const oVinState = ['O', 'O', 'O'];
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  const [xStep, setXStep] = useState(true);
  const [endGame, setEndGame] = useState(false);
  const [gameState, setGameState] = useState(defaultGameState)
  const [title, setTitle] = useState('X move');
  const [vinLine, setVinLine] = useState<Set<number>>(new Set())

  function checkViners(gameState: string[]): string {
    const getLine = (arr: number[]) => arr.map((i) => gameState[i]);

    for (const line of lines) {
      switch (true) {
        case equals(getLine(line), xVinState):
          setVinLine(new Set(line));
          return 'x_vin';
        case equals(getLine(line), oVinState):
          setVinLine(new Set(line));
          return 'o_vin';
        default: break;
      }
    }
    return '';
  }
  function equals(a: string[], b: string[]) {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }
  function restart() {
    setGameState(defaultGameState)
    setEndGame(false);
    setXStep(true);
    setVinLine(new Set());
    setTitle('X move');
  }

  function allowedMovesExists(gameState: string[]) {
    for (const square of gameState) {
      if (square === '') return true;
    }
    return false;
  }
  function changeState(num: number) {
    let newGameState = [...gameState];
    if (!newGameState[num] && !endGame)
      newGameState[num] = (xStep ? 'X' : 'O');
    else
      return;

    setGameState(newGameState);

    if (allowedMovesExists(newGameState))
      setXStep(!xStep);
    else {
      console.log('Ходы кончились');
      gameOver(checkViners(newGameState));
      return;
    }
    if (checkViners(newGameState))
      gameOver(checkViners(newGameState));
    else
      setTitle(`${(xStep ? 'O' : 'X')} move`);
  }
  function gameOver(viner: string) {
    setEndGame(true);
    switch (viner) {
      case 'x_vin':
        setTitle('      X vin!');
        break;
      case 'o_vin':
        setTitle('      O vin!');
        break;
      default:
        setTitle('Standoff');
        break;
    }
  }
  return (
    <div className="App">
      <div className="App__content">
        <GameBar title={title} restart={restart} />
        <GameField gameState={gameState} changeState={changeState} vinLine={vinLine} />
      </div>
    </div>
  );
}

export default App;
