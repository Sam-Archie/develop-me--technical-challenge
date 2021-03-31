import { connect } from "react-redux";
import { gameWinnerAction } from "../../data/actions.js";
import Game from "./Game";


const mapDispatchToProps = dispatch => {
    return {
       submitWinner: (player) => dispatch(gameWinnerAction(player)),
    };
};

export default connect(null, mapDispatchToProps)(Game);