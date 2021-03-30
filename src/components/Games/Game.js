import React from 'react';


const Game = ({ playerOne, playerTwo }) => {

    return (
        <div>
            <button>{ playerOne }</button>
            <button>{ playerTwo }</button>
        </div>
    );
};

export default Game;