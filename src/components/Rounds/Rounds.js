import React from 'react';
import Game from "../Game"; 


const Rounds = ({ round, reset, submitRound, listOfPlayers, tournamentName, roundNumber, tournamentId, isFinal }) => {

    return (
      <div>
        <h1 className="heading" >{tournamentName}</h1>
        <section className="games">
        {round.map((game) => (
          <Game
            key={game.id}
            listOfPlayers={listOfPlayers}
            playerOne={game.playerA}
            playerTwo={game.playerB}
            isFinal={round.length === 1}
          />
        ))}
        </section>
        <div className="back-to-home-container">
          <button className="add-btn" onClick={reset}>Back to the home</button>

          <p className="careful">This will take you back to the home page</p>
        </div>
            {round.length === listOfPlayers.length && listOfPlayers.length > 1 ? <button className="add-btn" onClick={() => submitRound(listOfPlayers, tournamentId, roundNumber)}> Submit All Rounds
        </button> : null}
      </div>
    );
};
export default Rounds;