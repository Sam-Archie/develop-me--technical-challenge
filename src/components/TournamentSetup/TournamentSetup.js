import React, { useState } from 'react';


const TournamentSetup = ({ startTournament, tournamentNumberChecker, playerCount, addPlayerName, listOfPlayers }) => {

    const [playerName, setPlayerName] = useState("");
    const [tournamentName, setTournamentName] = useState("");

    const handlePlayerName = (e) => {
        const newName = e.currentTarget.value;
        setPlayerName(newName);
        }

    const playerListSubmit = (e) => {
        if (listOfPlayers.includes(playerName)) {
            return null;
        }
        else {
            setPlayerName("");
            e.preventDefault();
            tournamentNumberChecker();
            addPlayerName(playerName);
        }
    }

    const handleTournamentName = (e) => { 
        const newTournamentName = e.currentTarget.value; 
        setTournamentName(newTournamentName);
    }

    const tournamentSubmit = (e) => {
        e.preventDefault();
        startTournament(tournamentName);
    }
    
    const correctPlayerNumber = (n) => {
        if (n === 0) {
            return false;
        }
        return parseInt((Math.ceil((Math.log(n) / Math.log(2))))) === parseInt((Math.floor(((Math.log(n) / Math.log(2))))));
    }
    
    const isDisabled = () => listOfPlayers.length < 4 || !correctPlayerNumber(listOfPlayers.length) ? true : false;

    const isExisitingName = () => listOfPlayers.some((player) => player === playerName);
     
    
    return (
        <>
            <form onSubmit={ tournamentSubmit }>
                <label>Enter Player Name:</label>
                <input
                    className=""
                    type="text"
                    id="playerName"
                    onChange={ handlePlayerName } 
                    value={ playerName }/>
                <button disabled={ isExisitingName() } onClick={ playerListSubmit }>Add Player</button>
                {isExisitingName() && <span>You cannot have two names that are the same</span>}

                <label htmlFor="playerName">Enter Tournament Name:</label>
                <input
                    className=""
                    type="text"
                    id="tournamentName"
                    onChange={ handleTournamentName } 
                    value={ tournamentName }/>
                <button disabled={ isDisabled() }>Start Tournament</button>
            </form>
            <ul className="list-group">
                <p>Tournament Players</p>
                    {listOfPlayers.map((playerName, index) => (
                        <li className="list-group-item" key={index}>{playerName}</li>
                    ))}
            </ul>
            <p>{playerCount < 4 ? "Please enter four or more players" : 
                    !correctPlayerNumber(playerCount) ? "Please enter 4, 8, 16,32, 64 ..... number of players" : 
                        null}</p>
        </>
    )
   }
   
   export default TournamentSetup;