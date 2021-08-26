import React, { FC } from 'react';
import Square from '../Square/Square';
import styles from './GameField.module.css';

interface GameFieldProps {
    gameState: string[];
    changeState: Function;
    vinLine: Set<number>;
}

const GameField: FC<GameFieldProps> = ({ gameState, changeState, vinLine }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                {[0, 1, 2].map((i) =>
                    <div className={styles.row} key={i}>
                        {[0, 1, 2].map((j) =>
                            <Square
                                key={i * 3 + j}
                                number={i * 3 + j}
                                changeState={changeState}
                                state={gameState[i * 3 + j]}
                                outline={vinLine.has(i * 3 + j)}
                            />
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default GameField
