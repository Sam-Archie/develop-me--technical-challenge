import { useState } from "react";

const Game = ({ playerOne, playerTwo, submitWinner, playerList, isFinal }) => {
    
    let [winner, setWinner] = useState();
    let [winnerSelect, setWinnerSelect] = useState(false);

    const handleWinnerOne = () => {
        setWinner(playerOne);

    }
    const handleWinnerTwo = () => {
        setWinner(playerTwo);

    }

    const confirmWinner = () => {
        setWinnerSelect(true);
        submitWinner(winner);

    } 
    let buttonStyle = {
        backgroundColor: "#d37121",
    }
    //abstract this out so it switches a class on or off
    
    return (
        <div>
            <button className="btn primary" style={winner === playerOne ? buttonStyle : null} onClick={ handleWinnerOne }>{ playerOne }</button>
            <button className="btn primary" style={winner === playerTwo ? buttonStyle : null} onClick={ handleWinnerTwo }>{ playerTwo }</button>
            <p>{winnerSelect ? `Well done ${winner}` : null}</p>
            {!winnerSelect ? <button className="btn primary" onClick={ confirmWinner }>Submit Winner</button> : null}
        </div>
    );
};

export default Game;