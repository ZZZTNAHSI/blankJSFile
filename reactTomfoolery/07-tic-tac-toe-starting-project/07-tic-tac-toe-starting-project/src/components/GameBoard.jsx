import { useState } from "react";

const initialGameBoard=[
    [null, null, null],
    [null, null, null],
    [null, null, null]
]


export default function GameBoard({onSelectSquare, activePlayerSymbol}) {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleSelectSquare(rowI, colI) {
        setGameBoard((prev) => {
            const prevGameBoard = [...prev.map((innerArray) => {return( [...innerArray])})];
            prevGameBoard[rowI][colI] = activePlayerSymbol;
            return (prevGameBoard);
        })
        onSelectSquare();
    }


    return(<ol id="game-board">
            {gameBoard.map((row, rowIndex) => {
                return (<li key={rowIndex}> 
                    <ol>
                        {row.map((playerSymbol, colIndex) => {
                            return (<li key={colIndex}>
                                <button onClick={() => { handleSelectSquare(rowIndex, colIndex)}}> {playerSymbol} </button>
                            </li>
            )})}
                    </ol> 
                </li>
            )})}
        </ol>);
}