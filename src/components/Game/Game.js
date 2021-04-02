import { useState, useEffect } from "react";

const Game = ({ playerOne, playerTwo, submitWinner, isFinal, winningScore }) => {
    
    const [playerOneScore, setPlayerOneScore] = useState(0);
    const [playerTwoScore, setPlayerTwoScore] = useState(0);

    useEffect(() => {
        if(playerOneScore === +winningScore ){
            submitWinner(playerOne);
        }
        if (playerTwoScore === +winningScore) {
            submitWinner(playerTwo);
          }  
        
    }, [playerOneScore, playerTwoScore, playerOne, playerTwo, winningScore, submitWinner])

    let buttonStyle = {
        backgroundColor: "#d37121",
    }

    return (
        <div>
            <button className="btn primary" style={playerOneScore === +winningScore ? buttonStyle : null}>{ playerOne }</button>
            <p>{ playerOneScore }</p>
            <button disabled={playerOneScore === +winningScore || playerTwoScore === +winningScore} onClick={() => setPlayerOneScore(playerOneScore + 1)} className="btn primary">+</button>
            <button className="btn primary" style={playerTwoScore === +winningScore ? buttonStyle : null}>{ playerTwo }</button>
            <p>{ playerTwoScore }</p>
            <button onClick={ () => setPlayerTwoScore(playerTwoScore + 1)} className="btn primary">+</button>
            <p>{playerTwoScore === +winningScore ? `Well done ${playerTwo}` : playerOneScore === +winningScore ? `Well done ${playerOne}` : null}</p>
        </div>
    );
};

export default Game;