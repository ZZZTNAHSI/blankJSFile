import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import {useState} from "react";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSelectSquare() {
    setActivePlayer((prev) => prev === "X" ? "O": "X");
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="player 1" symbol="X" />
          <Player initialName="player 2" symbol="O" />
        </ol>
        <GameBoard  onSelectSquare={handleSelectSquare}/>
      </div>
    </main>
  )
}

export default App
