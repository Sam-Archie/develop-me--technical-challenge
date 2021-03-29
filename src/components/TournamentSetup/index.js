import { connect } from "react-redux";
import { tournamentStartAction } from "../../data/actions.js";
import TournamentSetup from "./TournamentSetup";

const mapStateToProps = state => {
    return {
        startTournament: state.startTournament,
    }
}

const mapDispatchToProps = dispatch => {
    return {
       startTournament: (tournamentData) => dispatch(tournamentStartAction(tournamentData)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(TournamentSetup);