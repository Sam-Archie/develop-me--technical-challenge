import initialState from "../data/initial";

const addPlayer = (state, action) => {
    const player = {
        name: action.name,
    }
    return {
        ...state,
        players: [...state.players, player]
    }
}

const addTournamentName = (state, action) => {
    const tournamantName = {
        
    }
}

const startTournament = (state, action) => {

}

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_PLAYER" : return addPlayer(state, action);
        case "START_TOURNAMENT" : return startTournament(state, action);
        default : return state;
    }
}

export default  reducer;