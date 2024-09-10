import React, { useState } from 'react'
import Board from './Board';
import './tictactoe.css'

const Tictactoe = () => {

    const [box, setBox] = useState(Array(9).fill(null));
    const [isXTurn, setIsXTurn] = useState(true);

    const checkWinner = () => {
        const winnerLogic = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [2, 4, 6], [0, 4, 8]];
        for (let logic of winnerLogic) {
            const [a, b, c] = logic
            if (box[a] != null && box[a] === box[b] && box[a] === box[c]) {
                return box[a];
            }
        }
        return false;
    };

    const isWinner = checkWinner()

    const handleClick = (index) => {
        const copyBox = [...box];
        if (copyBox[index] == null) {
            copyBox[index] = isXTurn ? 'X' : 'O'
            setBox(copyBox);
            setIsXTurn(!isXTurn)
        } else {
            alert('box already filled')
        }
    }

    const startNewGame = () => {
        setBox(Array(9).fill(null));
    }

    return (
        <div className='parent'>
            <h1>TIC TAC TOE GAME</h1>
            {isWinner ? (<div className='winner'> Winner is : {isWinner} </div>) : (<>
                <div className="grid-container">
                    <Board onClick={() => handleClick(0)} value={box[0]} />
                    <Board onClick={() => handleClick(1)} value={box[1]} />
                    <Board onClick={() => handleClick(2)} value={box[2]} />
                    <Board onClick={() => handleClick(3)} value={box[3]} />
                    <Board onClick={() => handleClick(4)} value={box[4]} />
                    <Board onClick={() => handleClick(5)} value={box[5]} />
                    <Board onClick={() => handleClick(6)} value={box[6]} />
                    <Board onClick={() => handleClick(7)} value={box[7]} />
                    <Board onClick={() => handleClick(8)} value={box[8]} />
                </div>
            </>)
            }
            <button className='btn'onClick={startNewGame}>Start New Game</button>
        </div>
    )
}

export default Tictactoe