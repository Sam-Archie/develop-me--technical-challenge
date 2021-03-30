
const startTournament = (state, {payload}) => ({...state, listOfPlayers: [...payload.playerList], tournamentName: payload.tournamentName})

const randomizer = (state) => ({...state, listOfPlayers: state.listOfPlayers.sort(() => Math.random() - 0.5)});

const reducer = (state, action) => {
    switch (action.type) {
        case "START_TOURNAMENT" : return randomizer(startTournament(state, action));
        default : return state;
    }
}

export default reducer;