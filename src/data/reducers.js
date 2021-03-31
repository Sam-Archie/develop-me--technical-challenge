import initialState  from "./initial";


const startTournament = (state, {payload}) => ({...state, listOfPlayers: [...payload.playerList], tournamentName: payload.tournamentName, tournamentStarted: !payload.tournamentStarted})

const randomizer = (state) => ({...state, listOfPlayers: state.listOfPlayers.sort(() => Math.random() - 0.5)});

const createRoundFromArray = listOfPlayers => {
    return listOfPlayers.reduce((acc, player, index) => {
    if (index % 2 === 1) {
        return acc;
    }
    const game = {
        id: Math.ceil((index + 1) / 2),
        playerOne: player,
        playerTwo: listOfPlayers[index + 1],
        winner: null,
    }
    return [...acc, game];

},[])}

const reset = () => {
    return {
        ...initialState,
    }
}

const gameWinner = (state, {payload}) => {
    let player = payload; 
    return {
        ...state,
        winnerList: [...state.winnerList, player]
    }
}

const newRound = (state) => {
    return {
        ...state,
        listOfPlayers: state.winnerList,
        winnerList: [],
    }
}

// const newPlayerList = listOfRounds[listOfRound.lastIndexOf()].map(game => game.player1.score > game.player2.score ? player1 : player2)

// const newPlayerList = state.listOfRounds[listOfRound.lastIndexOf()].map((game) => game.winner);

const createInitialGames = (state) => ({...state, listOfRounds: createRoundFromArray(state.listOfPlayers)})
// const createGames = (state) => ({...state, listOfRounds: createRoundFromArray()})

const reducer = (state, action) => {
    switch (action.type) {
        case "START_TOURNAMENT" : return createInitialGames(randomizer(startTournament(state, action)));
        case "SUBMIT_ROUND" : return createInitialGames(newRound(state, action));
        case "WINNER" : return gameWinner(state, action);
        case "RESET" : return reset();
        // case "NEW_ROUND" : return createGames(state, action)
        default : return state;

    }
}

export default reducer;