import { connect } from "react-redux";
import { tournamentStartAction, addPlayerNameAction } from "../../data/actions.js";
import TournamentSetup from "./TournamentSetup";

const mapStateToProps = state => {
    return {
        playerCount: state.playerCount,
        listOfPlayers: state.listOfPlayers
    }
}

const mapDispatchToProps = dispatch => {
    return {
       startTournament: (tournamentData) => dispatch(tournamentStartAction(tournamentData)),
       addPlayerName: (player) => dispatch(addPlayerNameAction(player)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(TournamentSetup);