import React from 'react';
import Game from "../Game"; 


const Rounds = ({ round, reset, submitRound, listOfPlayers, listOfWinners, tournamentName, roundNumber, tournamentId }) => {

    return (
      <div>
        <h1>{tournamentName}</h1>
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
        <button className="btn primary" onClick={reset}>Back to the home page</button>
        <p>....Carefull if you click me you will lose your games</p>
            {round.length === listOfPlayers.length && listOfPlayers.length > 1 ? <button onClick={() => submitRound(listOfPlayers, tournamentId, roundNumber)}> Submit All Rounds
        </button> : null}
      </div>
    );
};
export default Rounds;