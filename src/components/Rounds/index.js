import { connect } from "react-redux";
import Rounds from "./Rounds";

const mapStateToProps = state => {
    return {
        Rounds: state.listOfRounds,
    }
}

export default connect(mapStateToProps)(Rounds);