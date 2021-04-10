import React, {  useEffect, useState } from 'react';


const TournamentSetup = ({ startTournament, addPlayerName, listOfPlayers, getHistoricPlayers, historicPlayerList }) => {

    const [playerName, setPlayerName] = useState("");
    const [tournamentName, setTournamentName] = useState("");
    const [winningScore, setWinningScore] = useState("7");
    
    const getInitialPlayers = getHistoricPlayers;

    const handlePlayerName = (e) => setPlayerName(e.currentTarget.value);

    useEffect (() => {
        getInitialPlayers();
    }, [getInitialPlayers]);
  

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
        <div className="setup-page-container">
            <section style={{overflow: 'auto'}}  className="list-display">
            <p>Previous Entrants:</p>
                <ul style={{display: 'flex', width: "100%", flexWrap: 'wrap', }}>
                    {historicPlayerList.map((player, index) => 
                    <li className="historic-players" 
                    key={index} 
                    disabled={ isExisitingName() }          
                    value={ player.name }
                    >{player.name}</li>)}
                </ul>
            </section>
  
        <section className="table-container">
            <div className="tournament-form">
                <div>
                    <form onSubmit={ tournamentSubmit }>
                        <div className="player-name-form">
                            <p htmlFor="playerName">Enter Player Name:</p>
                            <input
                                className="form-fields"
                                type="text"
                                id="playerName"
                                onChange={ handlePlayerName }
                                value={ playerName }/>
                        <button className="add-btn" disabled={ isExisitingName() } onClick={ playerNameSubmit }>Add Player</button>
                        {isExisitingName() && <span className="error-messages">You cannot have two names that are the same</span>}
                                {playerName === "" ? <p className="error-messages">Please Enter a valid name</p> : null}
                        </div>

                        <div>
                            <p>Select Winning Score:</p>
                            <select className="form-fields" onChange={e => setWinningScore(e.currentTarget.value)}>
                                <option className="form-fields" value={7}>7</option>
                                <option className="form-fields" value={11}>11</option>
                                <option className="form-fields" value={15}>15</option>
                                <option className="form-fields" value={21}>21</option>
                            </select>
                        </div>
                        <div>

                            <p htmlFor="tournamentName">Enter Tournament Name:</p>
                            <input
                                className="form-fields"
                                type="text"
                                id="tournamentName"
                                onChange={ handleTournamentName }
                                value={ tournamentName }/>
                            <button className="add-btn add-btn__tournament__btn" disabled={ isDisabled() }>Start Tournament</button>
                        </div>
                        <p className="error-messages">{listOfPlayers.length < 4 ? "Please enter four or more players" :
                            !correctPlayerNumber(listOfPlayers.length) ? "Please enter 4, 8, 16,32, 64 ..... number of players" :
                            null}
                    </p>
                    </form>
                </div>

            </div>
                <div className="tournament-form tournament-form__bottom">
                    <p>Tournament Players:</p>
                    <ul className="player-list-container">
                            {listOfPlayers.map((player, index) => (
                                <li className="player-list" key={index}>{player.name}</li>
                                ))}
                    </ul>
                </div>
        </section>
    </div>
    )
}

export default TournamentSetup;