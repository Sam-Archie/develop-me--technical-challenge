import { connect } from "react-redux";
import Rounds from "./Rounds";
import { resetAction, submitRoundAction } from "../../data/actions.js";

const mapStateToProps = state => {
    return {
      round: state.listOfGames,
      listOfWinners: state.listOfWinners,
      listOfPlayers: state.listOfPlayers,
      tournamentName: state.tournamentName,
      roundNumber: state.roundNumber,
      tournamentId: state.tournamentId,
    };
}

const mapDispatchToProps = dispatch => {
    return {
       reset: () => dispatch(resetAction()),
       submitRound: () => dispatch(submitRoundAction()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Rounds);