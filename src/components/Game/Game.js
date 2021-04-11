import { useState, useEffect } from "react";


const Game = ({ playerOne, playerTwo, submitWinner, isFinal, winningScore}) => {
    
    const [playerOneScore, setPlayerOneScore] = useState(0);
    const [playerTwoScore, setPlayerTwoScore] = useState(0);

    useEffect(() => {

      const scores = {
        playerAScore : playerOneScore,
        playerBScore : playerTwoScore
      }

      if (playerOneScore === +winningScore) {
        submitWinner(playerTwo, scores);
      }
      if (playerTwoScore === +winningScore) {
        submitWinner(playerOne, scores);
      }
    }, [
      playerOneScore,
      playerTwoScore,
      playerOne,
      playerTwo,
      winningScore,
      submitWinner,
    ]);
    
    const style = {
      width: "100%"
    }
    
    return (
      <div>
        <div style={ style } className="table animate__animated animate__flipInX">
            <div className="player-one">
              <p className={playerOneScore === +winningScore ? "winner animate__animated animate__heartBeat" : null}>{ playerOne.name }</p>

              <button className="score-button" disabled={playerOneScore === +winningScore || playerTwoScore === +winningScore} onClick={() => setPlayerOneScore(playerOneScore + 1)}>+</button>

              <p>{ playerOneScore }</p>

            </div>
            
            <div className="player-two">

                <p>{ playerTwoScore }</p>
    
                <button className="score-button" disabled={playerOneScore === +winningScore || playerTwoScore === +winningScore}  onClick={ () => setPlayerTwoScore(playerTwoScore + 1)}>+</button>

                <p className={playerTwoScore === +winningScore ? "winner animate__animated animate__heartBeat" : null}>{ playerTwo.name }</p>
    
              </div>
        </div>
    </div>
    );
};

export default Game;