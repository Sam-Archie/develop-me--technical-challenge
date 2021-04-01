import { connect } from "react-redux";
import Rounds from "./Rounds";
import { resetAction, submitRoundAction } from "../../data/actions.js";

const mapStateToProps = state => {
    return {
        round: state.listOfRounds,
        listOfWinners: state.winnerList,
        playerList: state.listOfPlayers, 
        tournamentName: state.tournamentName,
    }
}

const mapDispatchToProps = dispatch => {
    return {
       reset: () => dispatch(resetAction()),
       submitRound: () => dispatch(submitRoundAction()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Rounds);