import React, { useState } from 'react';


const TournamentSetup = ({ startTournament }) => {

    const [playerName, setPlayerName] = useState("");
    const [playerList, setPlayerList] = useState([]);
    const [tournamentName, setTournamentName] = useState("");

    const handlePlayerName = (e) => {
        const newName = e.currentTarget.value;
        setPlayerName(newName);
        }

    const playerListSubmit = (e) => {
        setPlayerList([...playerList, playerName], setPlayerName(""));
        e.preventDefault();
    }

    const handleTournamentName = (e) =>{ 
        const newTournamentName = e.currentTarget.value; 
        setTournamentName(newTournamentName);
    }

    const tournamentSubmit = (e) => {
        const tournamentData = {
            tournamentName : tournamentName,
            playerList: playerList,
        }
        startTournament(tournamentData);
        e.preventDefault();
    }

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
                <button onClick={ playerListSubmit }>Add Player</button>
                <label htmlFor="playerName">Enter Tournament Name:</label>
                <input
                    className=""
                    type="text"
                    id="tournamentName"
                    onChange={ handleTournamentName } 
                    value={ tournamentName }/>
                <button>Start Tournament</button>
            </form>
            <ul>
                <p>Tournament Players</p>
                    {playerList.map((playerName, index) => (
                        <li key={index}>{playerName}</li>
                    ))}
            </ul>
        </>
    )
   }
   
   export default TournamentSetup;