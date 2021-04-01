import { connect } from "react-redux";
import { tournamentStartAction, playerNumberCheckerAction } from "../../data/actions.js";
import TournamentSetup from "./TournamentSetup";

const mapStateToProps = state => {
    return {
        startTournament: state.startTournament,
        playerCount: state.playerCount,
    }
}

const mapDispatchToProps = dispatch => {
    return {
       startTournament: (tournamentData) => dispatch(tournamentStartAction(tournamentData)),
       tournamentNumberChecker: () => dispatch(playerNumberCheckerAction()),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(TournamentSetup);