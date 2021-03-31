import { connect } from "react-redux";
import { resetAction, gameWinnerAction, submitRoundAction } from "../../data/actions.js";
import Game from "./Game";


const mapDispatchToProps = dispatch => {
    return {
       reset: () => dispatch(resetAction()),
       submitWinner: (player) => dispatch(gameWinnerAction(player)),
       submitRound: () => dispatch(submitRoundAction()),
    };
};

export default connect(null, mapDispatchToProps)(Game);