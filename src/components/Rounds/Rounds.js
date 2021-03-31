import React from 'react';
import Game from "../Game"

const Rounds = ({ Round }) => {

    return (
        <div>
            {Round.map((round) => (
                <Game key={round.id} playerOne={round.playerOne} playerTwo={round.playerTwo}/>
            ))}
        </div>
    );
};

export default Rounds;