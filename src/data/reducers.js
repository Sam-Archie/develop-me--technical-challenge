
const startTournament = (state, {payload}) => ({...state, listOfPlayers: [...payload.playerList], tournamentName: payload.tournamentName})

const reducer = (state, action) => {
    switch (action.type) {
        case "START_TOURNAMENT" : return startTournament(state, action);
        default : return state;
    }
}

export default reducer;