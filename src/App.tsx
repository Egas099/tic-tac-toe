import React, { useState } from 'react';
import './css/App.css';
import GameBar from './components/UI/GameBar/GameBar';
import GameField from './components/GameField';

function App() {
  const defaultGameState = [['', '', ''], ['', '', ''], ['', '', '']];

  const [xStep, setXStep] = useState(true);
  const [endGame, setEndGame] = useState(false);
  const [gameState, setGameState] = useState(defaultGameState)

  function checkSteps() {

  }

  function restart() {
    setGameState(defaultGameState)
    setEndGame(false);
    setXStep(true);
  }

  function allowedStepsExists() {
    for (const row of gameState) {
      for (const square of row) {
        if (!square) return true;
      }
    }
    return false;
  }

  function changeState(x: number, y: number) {
    let newGameState = [...gameState];
    if (!newGameState[y][x]) newGameState[y][x] = (xStep ? 'X' : 'O');
    else return;
    setGameState(newGameState);
    if (allowedStepsExists()) setXStep(!xStep);
    else setEndGame(true);
  }

  return (
    <div className="App">
      <div className="App__content">
        <GameBar step={xStep} end={endGame} restart={restart} />
        <GameField gameState={gameState} changeState={changeState} />
      </div>
    </div>
  );
}

export default App;
