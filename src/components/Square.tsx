import React, { useState } from 'react'
import { FC } from 'react'

interface SquareProps {
    state: string;
    x: number;
    y: number;
    changeState: Function;
}

const Square: FC<SquareProps> = ({ state, x, y, changeState }) => {

    function click() {
        changeState(x, y)
    }

    function getState() {
        switch (state) {
            case 'X': return 'is-x';
            case 'O': return 'is-o';
            default: return 'is-empty';
        }
    }

    return (
        <div className="square__wrapper" draggable="false">
            <div
                className={'square neumorphism   square--' + getState()}
                onClick={click}>
            </div>
        </div>
    )
}

export default Square
