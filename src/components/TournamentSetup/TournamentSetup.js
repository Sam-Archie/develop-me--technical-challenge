import React, { useState } from 'react';


const TournamentSetup = ({ startTournament, playerCount, addPlayerName, listOfPlayers }) => {

    const [playerName, setPlayerName] = useState("");
    const [tournamentName, setTournamentName] = useState("");
    const [winningScore, setWinningScore] = useState("7");

    const handlePlayerName = (e) => setPlayerName(e.currentTarget.value);
        

    const playerNameSubmit = (e) => {
        e.preventDefault();
        if (playerName === "") {
            return;
        } else if (playerName !== "") {
            addPlayerName(playerName);
        }
        setPlayerName("");
    }


    const handleTournamentName = (e) => { 
        const tournamentName = e.currentTarget.value; 
        setTournamentName(tournamentName);
    }

    const tournamentSubmit = (e) => {
        e.preventDefault();
        const tournamentData = {
            tournamentName: tournamentName,
            winningScore: winningScore,
        }
        startTournament(tournamentData);
    }
    
    const correctPlayerNumber = (n) => {
        if (n === 0) {
            return false;
        }
        return parseInt((Math.ceil((Math.log(n) / Math.log(2))))) === parseInt((Math.floor(((Math.log(n) / Math.log(2))))));
    }
    
    const isDisabled = () => listOfPlayers.length < 4 || !correctPlayerNumber(listOfPlayers.length) ? true : false;

    const isExisitingName = () => listOfPlayers.some((player) => player.toLowerCase() === playerName.toLowerCase());
     
    return (
        <>
            <form onSubmit={ tournamentSubmit }>
                <label htmlFor="playerName">Enter Player Name:</label>
                <input
                    className=""
                    type="text"
                    id="playerName"
                    onChange={ handlePlayerName } 
                    value={ playerName }/>
                <button disabled={ isExisitingName() } onClick={ playerNameSubmit }>Add Player</button>
                {playerName === "" ? <p>Please Enter a valid name</p> : null}
                {isExisitingName() && <span>You cannot have two names that are the same</span>}

                <label>Select Winning Score</label>
                <select onChange={e => setWinningScore(e.currentTarget.value)}>
                    <option value={7}>7</option>
                    <option value={11}>11</option>
                    <option value={15}>15</option>
                    <option value={21}>21</option>
                </select>

                <label htmlFor="tournamentName">Enter Tournament Name:</label>
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