import { useState } from "react";

const Game = ({ playerOne, playerTwo, reset, submitWinner, submitRound }) => {
    
    let [winner, setWinner] = useState("");
    let [submitClicked, setSubmitClicked] = useState(false);
    let [playerClickOne, setPlayerClickOne] = useState(false);
    let [playerClickTwo, setPlayerClickTwo] = useState(false);

    const handleWinnerOne = () => {
        setWinner(playerOne);
        setPlayerClickOne(true);
        setPlayerClickTwo(false);
    }
    const handleWinnerTwo = () => {
        setWinner(playerTwo);
        setPlayerClickOne(false);
        setPlayerClickTwo(true);
    }

    const confirmWinner = () => {
        setSubmitClicked(true);
        submitWinner(winner);

    } 
    let buttonStyle = {
        backgroundColor: "blue",
    }
    return (
        <>
            <button style={playerClickOne ? buttonStyle : null} onClick={ handleWinnerOne }>{ playerOne }</button>
            <button style={playerClickTwo ? buttonStyle : null} onClick={ handleWinnerTwo }>{ playerTwo }</button>
            <p>{submitClicked ? `Well done ${winner}` : null}</p>
            {!submitClicked ? <button onClick={ confirmWinner }>Submit Winner</button> : null}
            <button onClick={ reset }>RESET</button>
            <button onClick={ submitRound }>Submit All Rounds</button>
        </>
    );
};

export default Game;