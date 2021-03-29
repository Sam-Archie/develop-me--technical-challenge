import { connect } from "react-redux";
import { addPlayerAction } from "../../data/actions";
import TournamentSetup from "./TournamentSetup";

const mapStateToProps = state => {
    
    return {
        player: state.playerName,
    }
}

const mapDispatchToProps = dispatch => {
    return {
       startTournament: (data) => dispatch(tournamentStartAction(data)),
       addPlayer: (data) => dispatch(addPlayerAction(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TournamentSetup);