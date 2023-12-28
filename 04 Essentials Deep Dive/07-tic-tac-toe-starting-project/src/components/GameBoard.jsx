import { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard({ onSelectSquare, activePlayerSymbol }){
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // function handleSelectSquare(rowIndex, colIndex){
    //     setGameBoard((prevGameBoard) => {
    //         const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
    //         updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         return updatedBoard;
    //     });

    //     onSelectSquare(); //this method is always executed when the button is clicked
    // }
    return(
        <ol id="game-board">

            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={onSelectSquare}>{playerSymbol}</button>
                            </li>
                        ))}        
                    </ol>

                </li>
            ))}
        </ol>
    );
}


{/*
Outer List (<ol>): Game board
    List Item (<li>): Row 1
        Nested List (<ol>): Cells in Row 1
            List Item (<li>): Cell 1 (Button with player symbol)
            List Item (<li>): Cell 2 (Button with player symbol)
            List Item (<li>): Cell 3 (Button with player symbol)
    List Item (<li>): Row 2
        Nested List (<ol>): Cells in Row 2
            List Item (<li>): Cell 1 (Button with player symbol)
            List Item (<li>): Cell 2 (Button with player symbol)
            List Item (<li>): Cell 3 (Button with player symbol)
    List Item (<li>): Row 3
        Nested List (<ol>): Cells in Row 3
            List Item (<li>): Cell 1 (Button with player symbol)
            List Item (<li>): Cell 2 (Button with player symbol)
            List Item (<li>): Cell 3 (Button with player symbol)
*/}