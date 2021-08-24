import React, { FC } from 'react'
import styles from './GameBar.module.css'

interface GameBarProps {
    step: boolean;
    end: boolean;
    restart: Function;
}

const GameBar: FC<GameBarProps> = ({ step, end, restart }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content + " neumorphism"}>
                {end
                    ? <div>GameOver</div>
                    : <div>{"Ход " + (step ? 'X' : 'O')}</div>
                }
                <div onClick={() => restart()} className={"fa fa-refresh " + styles.icon} aria-hidden="true" />
            </div>
        </div>
    )
}

export default GameBar
