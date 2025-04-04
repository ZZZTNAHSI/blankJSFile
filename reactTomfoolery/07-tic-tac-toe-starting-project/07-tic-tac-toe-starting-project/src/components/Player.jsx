import { useState } from "react";

export default function Player({initialName, symbol, isActive, onChangeName}) {

    const [playerName, setPlayerName] = useState(initialName);   
    const [isEditing, setIsEditing] = useState(false);

    function handleClick() {
        setIsEditing((prev) => !prev);
        if (isEditing) { onChangeName(symbol, playerName); }
    }

    function handleChange(e) {
        setPlayerName(e.target.value);
    }

    return (
        <>
        <li className={isActive ? "active": ""}>
        <span className="player">
          {isEditing? <input value={playerName}  onChange={handleChange} type="text" required/> :<span className="player-name">{playerName}</span>}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleClick}>{isEditing? "Save": "Edit"}</button>
        </li>
        </>
    );
}