import { connect } from "react-redux";
import { tournamentStartAction, addPlayerNameAction, getHistoricPlayersAction } from "../../data/actions.js";
import TournamentSetup from "./TournamentSetup";

const mapStateToProps = state => {
    return {
        playerCount: state.playerCount,
        listOfPlayers: state.listOfPlayers,
        historicPlayerList: state.historicPlayerList
    }
}

const mapDispatchToProps = dispatch => {
    return {
       startTournament: (tournamentData) => dispatch(tournamentStartAction(tournamentData)),
       addPlayerName: (player) => dispatch(addPlayerNameAction(player)),
       getHistoricPlayers: () => dispatch(getHistoricPlayersAction())
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(TournamentSetup);