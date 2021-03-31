import { connect } from "react-redux";
import Rounds from "./Rounds";

const mapStateToProps = state => {
    return {
        Round: state.listOfRounds,
    }
}

export default connect(mapStateToProps)(Rounds);