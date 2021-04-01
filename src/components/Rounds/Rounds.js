import React from 'react';
import Game from "../Game"; 

const Rounds = ({ Round, reset, submitRound, playerList, listOfWinners, tournamentName }) => {

    return (
        <div>
            <h1>{ tournamentName }</h1>
            {Round.map((game) => (
                <Game key={ game.id } playerList={ playerList } playerOne={game.playerOne} playerTwo={game.playerTwo}/>
            ))}
            <button className="btn primary" onClick={ reset }>RESET</button>
            {listOfWinners.length >= (playerList.length / 2) ? <button onClick={ submitRound }>Submit All Rounds</button> : null}
            {playerList.length <= 2 ? <button>Submit Champion</button> : null}
        </div>
    );
};
export default Rounds;