import React from 'react';
import Game from "../Game"; 

const Rounds = ({ round, reset, submitRound, playerList, listOfWinners, tournamentName }) => {
    const isFinal = round.length === 1;

    return (
        <div>
            <h1>{ tournamentName }</h1>
            {round.map((game) => (
                <Game key={ game.id } playerList={ playerList } playerOne={game.playerOne} playerTwo={game.playerTwo} isFinal={ isFinal }/>
            ))}
            <button className="btn primary" onClick={ reset }>RESET</button>
            {!isFinal && round.length === listOfWinners.length ? <button onClick={ submitRound }>Submit All Rounds</button> : null}
            {isFinal ? <button>Submit Champion</button> : null}
        </div>
    );
};
export default Rounds;