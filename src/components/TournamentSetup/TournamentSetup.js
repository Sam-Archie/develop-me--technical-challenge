import React, { useState } from 'react';


const TournamentSetup = ({ startTournament, tournamentNumberChecker, playerCount }) => {

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
        tournamentNumberChecker();
    }

    const handleTournamentName = (e) =>{ 
        const newTournamentName = e.currentTarget.value; 
        setTournamentName(newTournamentName);
    }

    const tournamentSubmit = (e) => {
        e.preventDefault();
        const tournamentData = {
            tournamentName : tournamentName,
            playerList: playerList,
        }
        startTournament(tournamentData);
    }

    const correctPlayerNumber = (n) =>
    {
        if (n === 0)
            return false;
        return parseInt((Math.ceil((Math.log(n) / Math.log(2))))) === parseInt((Math.floor(((Math.log(n) / Math.log(2))))));
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
            <ul className="list-group">
                <p>Tournament Players</p>
                    {playerList.map((playerName, index) => (
                        <li className="list-group-item" key={index}>{playerName}</li>
                    ))}
            </ul>
            <p>{playerCount < 4 ? "Please Enter four or more players" : 
                    !correctPlayerNumber(playerCount) ? "Please enter 4, 8, 18,32, 64 ..... number of players" : 
                        null}</p>
        </>
    )
   }
   
   export default TournamentSetup;