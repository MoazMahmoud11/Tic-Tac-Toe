import { useState } from "react"

export default function Player({initialName, symbol, isActive, onChangeName }){
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);
    function HandleEditClick(){
        // console.log(true)
        setIsEditing( (editing) => !editing ); //opposite => isEditing ? false : true || !isEditing
        if(isEditing){
            onChangeName(symbol, playerName);
        }
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    let editPlayerName = <span className="player-name">{playerName}</span>;
    // let btnCaption = 'Edit';

    if(isEditing){
        editPlayerName = 
        <input type="text"  required 
        Value={playerName} onChange={handleChange} />;
        // btnCaption="Save";
    }

    return (
        <li className={isActive ? "active" : undefined}>
            <span className="player">
                {editPlayerName}
                <span className="player-symbol">{symbol}</span>
                <button onClick={ () => HandleEditClick()} >{isEditing? "Save" : "Edit"}</button>
            </span>
        </li>
    )
}

            {/* {isEditing ? <span className="player">
                <span className="player-name">{name}</span>
                <span className="player-symbol">{symbol}</span>
            </span>
        : <button onClick={ () => HandleEditing()}>Edit</button>    
        } 
        ** THe Way to understand
        */ } 