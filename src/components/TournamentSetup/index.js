import { connect } from "react-redux";
import { tournamentStartAction, playerNumberCheckerAction, addPlayerNameAction } from "../../data/actions.js";
import TournamentSetup from "./TournamentSetup";

const mapStateToProps = state => {
    return {
        startTournament: state.startTournament,
        playerCount: state.playerCount,
        listOfPlayers: state.listOfPlayers
    }
}

const mapDispatchToProps = dispatch => {
    return {
       startTournament: (tournamentData) => dispatch(tournamentStartAction(tournamentData)),
       tournamentNumberChecker: () => dispatch(playerNumberCheckerAction()),
       addPlayerName: (player) => dispatch(addPlayerNameAction(player)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(TournamentSetup);