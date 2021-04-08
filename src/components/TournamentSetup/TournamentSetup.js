import React, { useState } from 'react';


const TournamentSetup = ({ startTournament, addPlayerName, listOfPlayers }) => {

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
            entrants: listOfPlayers,
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

    const isExisitingName = () => listOfPlayers.some((player) => player.name.toLowerCase() === playerName.toLowerCase());
     
    return (  
        <>
            <form onSubmit={ tournamentSubmit }>
                <div className="player-name-form">
                <label htmlFor="playerName">Enter Player Name:</label>
                <input
                    className=""
                    type="text"
                    id="playerName"
                    onChange={ handlePlayerName } 
                    value={ playerName }/>
                <button className=".add-player-button" disabled={ isExisitingName() } onClick={ playerNameSubmit }>Add Player</button>
                {playerName === "" ? <p>Please Enter a valid name</p> : null}
                {isExisitingName() && <span>You cannot have two names that are the same</span>}
                </div>

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
            <div className="player-list">
                <ul className="">
                    <p>Tournament Players</p>
                        {listOfPlayers.map((player, index) => (
                            <li className="player-list" key={index}>{player.name}</li>
                        ))}
                </ul>
                <p>{listOfPlayers.length < 4 ? "Please enter four or more players" :
                        !correctPlayerNumber(listOfPlayers.length) ? "Please enter 4, 8, 16,32, 64 ..... number of players" :
                            null}
                </p>
            </div>
        </>
    )
   }
   
   export default TournamentSetup;