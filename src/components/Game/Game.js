import { useState } from "react";

const Game = ({ playerOne, playerTwo, submitWinner }) => {
    
    let [winner, setWinner] = useState();
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
        backgroundColor: "#d37121",
    }

    //abstract this out so it switches a class on or off
    
    return (
        <div>
            <button className="btn primary" style={winner === playerOne ? buttonStyle : null} onClick={ handleWinnerOne }>{ playerOne }</button>
            <button className="btn primary" style={winner === playerTwo ? buttonStyle : null} onClick={ handleWinnerTwo }>{ playerTwo }</button>
            <p>{submitClicked ? `Well done ${winner}` : null}</p>
            {!submitClicked ? <button className="btn primary" onClick={ confirmWinner }>Submit Winner</button> : null}
        </div>
    );
};

export default Game;