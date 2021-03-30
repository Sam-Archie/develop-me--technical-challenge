import React from 'react';
import Game from "../Games/Game"

const Rounds = ({ Rounds }) => {
    return (
        <div>
            {Rounds.map((round) => (
                <Game key={round.id} playerOne={round.playerOne} playerTwo={round.playerTwo}/>
            ))}
        </div>
    );
};

export default Rounds;