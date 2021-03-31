import React from 'react';
import Game from "../Game";
import {v4 as uuid} from "uuid"; 

const Rounds = ({ Round, reset, submitRound }) => {

    return (
        <div>
            {Round.map((round) => (
                <Game key={ uuid() } playerOne={round.playerOne} playerTwo={round.playerTwo}/>
            ))}
            <button onClick={ reset }>RESET</button>
            <button onClick={ submitRound }>Submit All Rounds</button>
        </div>
    );
};

export default Rounds;