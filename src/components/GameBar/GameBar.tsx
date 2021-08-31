import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import { restartGame } from '../../store/gameReducer';
import styles from './GameBar.module.css'

interface GameBarProps {
    title: string;
}

const GameBar: FC<GameBarProps> = ({ title}) => {
    const dispath = useDispatch();

    return (
        <div className={styles.wrapper}>
            <div className={styles.content + " neumorphism"}>
                <div className={styles.title}>{title}</div>
                <div onClick={() => dispath(restartGame())} className={"fa fa-refresh " + styles.icon} aria-hidden="true" />
            </div>
        </div>
    )
}

export default GameBar
