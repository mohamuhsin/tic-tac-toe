import { useState } from "react";

export default function GameBoard({ onSelectSquare, turns }) {
  const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSelectedSquare(rowIndex, colIndex) {
    //   setGameBoard((prevGameBoard) => {
    //     const updatedBoard = [
    //       ...prevGameBoard.map((innerArray) => [...innerArray]),
    //     ];
    //     updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
    //     return updatedBoard;
    //   });
    //   onSelectSquare();
  }
  return (
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
