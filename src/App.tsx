import React, { useEffect, useState } from 'react';
import './css/App.css';
import GameBar from './components/GameBar/GameBar';
import GameField from './components/GameField/GameField';
import { useTypedSelector } from './hooks/useTypedSelector';
import { checkWinners, findWinners } from './logic/game';
import { useDispatch } from 'react-redux';
import { changeTitle } from './store/gameReducer';
import { Winner } from './types/game';

function App() {
  const dispath = useDispatch();
  const gameState = useTypedSelector(state => state.game);
  const [vinLine, setVinLine] = useState<Set<number>>(new Set())

  useEffect(() => {
    if (gameState.endGame)
      gameOver(findWinners(gameState.field));
    else
      setVinLine(new Set());
  }, [gameState.endGame])

  function gameOver(winner: Winner) {
    switch (winner) {
      case Winner.X:
        dispath(changeTitle('X win!'));
        break;
      case Winner.O:
        dispath(changeTitle('O win!'));
        break;
      default:
        dispath(changeTitle('Tie!'))
        return;
    }
    setVinLine(new Set(checkWinners(gameState.field)));
  }

  return (
    <div className="App">
      <div className="App__content">
        <GameBar title={gameState.title} />
        <GameField gameState={gameState.field} vinLine={vinLine} />
      </div>
    </div>
  );
}

export default App;
