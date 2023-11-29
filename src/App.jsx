import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="player 1" symbol="X" />
          <Player initialName="player 2" symbol="0" />
        </ol>
        <GameBoard />
      </div>
      LOG
    </main>
  );
}

export default App;
