import TournamentSetup from "../TournamentSetup";
import Rounds from "../Rounds";

const App = ({ tournamentStarted }) =>(
    <div className="container">
        
        { 
            !tournamentStarted ? 
            <TournamentSetup /> : 
            <Rounds /> 
            
        }
    </div>

)

export default App;
