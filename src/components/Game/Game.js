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

   
    const congratulations = () => {
        if (playerTwoScore === +winningScore && isFinal) {
        return <p>{`Congratulations ${playerTwo.name} You are the tournament winner!!!!`}</p>
        } 
        else if (playerOneScore === +winningScore && isFinal) {
            return <p>{`Congratulations ${playerOne.name} You are the tournament winner!!!!`}</p>
        }
        else if (playerTwoScore === +winningScore && !isFinal) {
            return <p>{`Well done ${playerTwo.name}`}</p>

        } else if (playerOneScore === +winningScore && !isFinal) {
            return <p>{`Well done ${playerOne.name}`}</p>
        }
        
    }

     let buttonStyle = {
        backgroundColor: "#d37121",
    }


    return (
        <div>
            <button className="btn primary" style={playerOneScore === +winningScore ? buttonStyle : null}>{ playerOne.name }</button>
            <p>{ playerOneScore }</p>

            <button disabled={playerOneScore === +winningScore || playerTwoScore === +winningScore} onClick={() => setPlayerOneScore(playerOneScore + 1)} className="btn primary">+</button>

            <button className="btn primary" style={playerTwoScore === +winningScore ? buttonStyle : null}>{ playerTwo.name }</button>

            <p>{ playerTwoScore }</p>

            <button  disabled={playerOneScore === +winningScore || playerTwoScore === +winningScore}  onClick={ () => setPlayerTwoScore(playerTwoScore + 1)} className="btn primary">+</button>

            <div>{ congratulations() }</div>
        </div>
    );
};

export default Game;