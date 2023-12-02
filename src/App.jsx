import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

import { useState } from "react";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  const [gameTurns, setGameTurns] = useState([]);

  function handleSelectedSquare(rowIndex, colIndex) {
    let currentPlayer = "X";

    if (prevTurns.length > 0 && prevTurns[0].player === "X") {
      currentPlayer = "0";
    }

    setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "0" : "X"));

    setGameTurns((prevTurns) => {
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="player 2"
            symbol="0"
            isActive={activePlayer === "0"}
          />
        </ol>
        <GameBoard onSelectSquare={handleSelectedSquare} turns={gameTurns} />
      </div>
      LOG
    </main>
  );
}

export default App;
