import React, { useState } from 'react';


const TournamentSetup = ({ startTournament, addPlayer }) => {

    const [playerName, setPlayerName] = useState("");
    const [playerList, setPlayerList] = useState([]);
    const [tournamentName, setTournamentName] = useState("");


    const handlePlayerName = (e) =>setPlayerName(e.currentTarget.value);

    const handleTournamentName = (e) => setTournamentName(e.currentTarget.value);

    const playerSubmit = (e) => {
        setPlayerList([...playerList, playerName], setPlayerName(""));
        e.preventDefault();
    }
    
    const tournamentSubmit = (e) => {
        e.preventDefault();

        const tournamentData = {
            tournamentName : tournamentName,
            playerList: playerList,
        }
    }

    return (
        <>
            <form>
                    <label htmlFor="playerName">Enter Tournament Name:</label>
                    <input
                        className=""
                        type="text"
                        id="playerName"
                        onChange={ handleTournamentName } 
                        value={ tournamentName }/>
                    <button onClick={ tournamentSubmit }>Submit</button>

                    <label>Enter Player Name:</label>
                    <input
                        className=""
                        type="text"
                        id="playerName"
                        onChange={ handlePlayerName } 
                        value={ playerName }/>
                    <button onClick={ playerSubmit }>Submit</button>
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