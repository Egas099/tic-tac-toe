import React, { useState } from 'react'
import { FC } from 'react'
import '../App.css'

interface SquareProps {
    state: string;
    x: number;
    y: number;
    changeState: Function;
}

const Square: FC<SquareProps> = ({ state, x, y, changeState }) => {

    function click(event: React.MouseEvent) {
        console.log(x, y);
        changeState(x, y)
    }

    return (
        <div className="square__wrapper">
            <div
                className={['square '
                    + (state === 'X' ? 'square--is-x' : '')
                    + (state === 'O' ? 'square--is-o' : '')
                ].join(' ')}
                onClick={click}>{state}</div>
        </div>
    )
}

export default Square
