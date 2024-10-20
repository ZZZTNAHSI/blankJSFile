import { useState } from "react";

export default function Player({initialName, symbol}) {

    const [playerName, setPlayerName] = useState(initialName);   
    const [isEditing, setIsEditing] = useState(false);

    function handleClick() {
        setIsEditing((prev) => !prev)
    }

    function handleChange(e) {
        setPlayerName(e.target.value);
    }

    return (
        <>
        <li>
        <span className="player">
          {isEditing? <input value={playerName}  onChange={handleChange} type="text" required/> :<span className="player-name">{playerName}</span>}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleClick}>{isEditing? "Save": "Edit"}</button>
        </li>
        </>
    );
}