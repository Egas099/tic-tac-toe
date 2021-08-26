import React, { useState } from 'react'
import { FC } from 'react'
import styles from './Square.module.css'

interface SquareProps {
    state: string;
    number: number;
    changeState: Function;
    outline: boolean;
}

const Square: FC<SquareProps> = ({ state, number, changeState, outline }) => {

    function click() {
        changeState(number)
    }

    function getState() {
        switch (state) {
            case 'X': return styles.is_x;
            case 'O': return styles.is_o;
            default: return styles.is_empty;
        }
    }

    return (
        <div className={styles.wrapper} draggable="false">
            <div
                className={[styles.content, getState(), (outline ? styles.outline : ''), 'neumorphism'].join(' ')}
                onClick={click}>
            </div>
        </div>
    )
}

export default Square
