import React, { useState } from 'react';
import './App.css';
import GameField from './components/GameField';

function App() {
  const [xStep, setXStep] = useState(true)
  const [gameState, setGameState] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ])

  function changeState(x: number, y: number) {
    let newGameState = [...gameState];
    if (!newGameState[y][x]) newGameState[y][x] = (xStep ? 'X' : 'O');
    else return;
    setXStep(!xStep)
    setGameState(newGameState);
  }

  return (
    <div className="App">
      <h3>Ход {(xStep ? 'X' : 'O')}</h3>
      <GameField gameState={gameState} changeState={changeState} />
    </div>
  );
}

export default App;
