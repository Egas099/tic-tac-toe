import React, { FC } from 'react'
import Square from './Square'

interface GameFieldProps {
    gameState: string[];
    changeState: Function;
    vinLine: Set<number>;
}

const GameField: FC<GameFieldProps> = ({ gameState, changeState, vinLine }) => {
    return (
        <div className="game-field__wrapper">
            <div className="game-field">
                {
                    [0, 1, 2].map((i) =>
                        <div className="row" key={i}>
                            {
                                [0, 1, 2].map((j) =>
                                    <Square
                                        key={i * 3 + j}
                                        number={i * 3 + j}
                                        changeState={changeState}
                                        state={gameState[i * 3 + j]}
                                        outLine={vinLine.has(i * 3 + j)}
                                    />
                                )
                            }
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default GameField
