import TournamentSetup from "../TournamentSetup";
import Rounds from "../Rounds";
import Header from "../Header/Header";


const App = ({ tournamentStarted }) =>(
    
    <div className="container">
    <Header />
        { 
            !tournamentStarted ? 
            <TournamentSetup /> : 
            <Rounds /> 
            
        }
    </div>

)

export default App;
