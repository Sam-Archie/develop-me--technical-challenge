import { connect } from "react-redux";
import { gameWinnerAction } from "../../data/actions.js";
import Game from "./Game";

const mapStateToProps = state => {
    
    return {
        winningScore: state.winningScore,
        tournamentId: state.tournamentId,
        roundNumber: state.roundNumber
    }
}


const mapDispatchToProps = dispatch => {
    return {
       submitWinner: (player, scores) => dispatch(gameWinnerAction(player, scores)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);