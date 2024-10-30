import { useState } from "react";




export default function GameBoard({onSelectSquare, board}) {



    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // function handleSelectSquare(rowI, colI) {
    //     setGameBoard((prev) => {
    //         const prevGameBoard = [...prev.map((innerArray) => {return( [...innerArray])})];
    //         prevGameBoard[rowI][colI] = activePlayerSymbol;
    //         return (prevGameBoard);
    //     })
    //     onSelectSquare();
    // }


    return(<ol id="game-board">
            {board.map((row, rowIndex) => {
                return (<li key={rowIndex}> 
                    <ol>
                        {row.map((playerSymbol, colIndex) => {
                            return (<li key={colIndex}>
                                <button onClick={() => {
                                    onSelectSquare(rowIndex, colIndex);
                                }} disabled={ playerSymbol !== null}> {playerSymbol} </button>
                            </li>
            )})}
                    </ol> 
                </li>
            )})}
        </ol>);
}