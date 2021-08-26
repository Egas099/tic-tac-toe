import React, { FC } from 'react'
import styles from './GameBar.module.css'

interface GameBarProps {
    title: string;
    restart: Function;
}

const GameBar: FC<GameBarProps> = ({ title, restart }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content + " neumorphism"}>
                <div className={styles.title}>{title}</div>
                <div onClick={() => restart()} className={"fa fa-refresh " + styles.icon} aria-hidden="true" />
            </div>
        </div>
    )
}

export default GameBar
