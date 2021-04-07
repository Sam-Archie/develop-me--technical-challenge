import React from 'react';
import Game from "../Game"; 


const Rounds = ({ round, reset, submitRound, listOfPlayers, listOfWinners, tournamentName, roundNumber, tournamentId }) => {

    return (
      <div>
        <h1>{tournamentName}</h1>
        {round.map((game) => (
          <Game
            key={game.id}
            listOfPlayers={listOfPlayers}
            playerOne={game.playerA}
            playerTwo={game.playerB}
            isFinal={round.length === 1}
          />
        ))}
        <button className="btn primary" onClick={reset}>
          RESET
        </button>
        {round.length === listOfWinners.length ? (
          <button
            onClick={() =>
              submitRound(listOfWinners, tournamentId, roundNumber)
            }
          >
            Submit All Rounds
          </button>
        ) : null}
      </div>
    );
};
export default Rounds;