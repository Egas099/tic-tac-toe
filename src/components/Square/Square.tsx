import React from 'react'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { playerMove } from '../../store/gameReducer'
import styles from './Square.module.css'

interface SquareProps {
    state: string;
    number: number;
    outline: boolean;
}

const Square: FC<SquareProps> = ({ state, number, outline }) => {
    const dispath = useDispatch();

    function click() {
        dispath(playerMove(number));
    }

    function getStyle() {
        switch (state) {
            case 'X': return styles.is_x;
            case 'O': return styles.is_o;
            default: return styles.is_empty;
        }
    }

    return (
        <div className={styles.wrapper} draggable="false">
            <div
                className={[styles.content, getStyle(), (outline ? styles.outline : ''), 'neumorphism'].join(' ')}
                onClick={click}>
            </div>
        </div>
    )
}

export default Square
