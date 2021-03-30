
import TournamentSetup from "../TournamentSetup";
import Rounds from "../Rounds"

const App = ({ tournamentStarted }) =>(
    <>
    { !tournamentStarted ? <TournamentSetup /> : <Rounds />
    }
    </>

)

export default App;
