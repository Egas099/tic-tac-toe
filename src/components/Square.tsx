import React, { useState } from 'react'
import { FC } from 'react'

interface SquareProps {
    state: string;
    number: number;
    changeState: Function;
    outLine: boolean;
}

const Square: FC<SquareProps> = ({ state, number, changeState, outLine }) => {

    function click() {
        changeState(number)
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
                className={'square neumorphism square--' + getState() + (outLine ? ' out ' : '')}
                onClick={click}>
            </div>
        </div>
    )
}

export default Square
