import { useState } from "react";

export default function Player({initialName, symbol, isActive}) {

    const [ isEditing, setIsEditing ] = useState(false);
    const [ playerName, setPlayerName ] = useState(initialName);

    function handleEditClick(){
        setIsEditing((editing) => !editing);
        console.log("Button is Clicked");
    }

    function handleChange(event){
        console.log(event);
        setPlayerName(event.target.value);
    }

    return(
        <li className={isActive? 'active' : undefined}>
            <span className="player">
                {isEditing ? 
                    <input type="text" value = {playerName} required onChange={handleChange} /> :
                    <span className="player-name">{playerName}</span> }
                <span className="player-symbol">{symbol}</span>
            </span>
                <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
          </li>
    );
}