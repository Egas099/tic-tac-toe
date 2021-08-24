import React, { FC } from 'react'
import Square from './Square'

interface GameFieldProps {
    gameState: string[][];
    changeState: Function;
}

const GameField: FC<GameFieldProps> = ({ gameState, changeState }) => {
    return (
        <div className="game-field__wrapper">
            <div className="game-field">
                {gameState.map((row, y) =>
                    <div className="row" key={y}>
                        {row.map((square, x) =>
                            <Square key={x} x={x} y={y} changeState={changeState} state={square} />
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default GameField
