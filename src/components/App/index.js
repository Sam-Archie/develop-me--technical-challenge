import App from "./App";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
        tournamentStarted: state.tournamentStarted,
    }
}

export default connect(mapStateToProps)(App);