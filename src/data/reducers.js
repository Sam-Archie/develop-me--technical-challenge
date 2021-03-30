
const startTournament = (state, {payload}) => ({...state, listOfPlayers: [...payload.playerList], tournamentName: payload.tournamentName})

const randomizer = (state) => ({...state, listOfPlayers: state.listOfPlayers.sort(() => Math.random() - 0.5)});

const createGamesFromArray = listOfPlayers => {
    return listOfPlayers.reduce((acc, player, index) => {
    if (index % 2 === 1) {
        return acc;
    }
    const game = {
        playerOne: player,
        playerTwo: listOfPlayers[index + 1],
    }
    return [...acc, game];

},[])}

const createGames = (state) => ({...state, listOfRounds: createGamesFromArray(state.listOfPlayers)})

const reducer = (state, action) => {
    switch (action.type) {
        case "START_TOURNAMENT" : return createGames(randomizer(startTournament(state, action)));
        default : return state;
    }
}

export default reducer;