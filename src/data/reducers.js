import initialState  from "./initial";
import {v4 as uuid} from "uuid";


const startTournament = (state, {payload}) => ({...state, listOfPlayers: randomizer([...state.listOfPlayers]), tournamentName: payload.tournamentName, tournamentStarted: true, winningScore: payload.winningScore})

const randomizer = (listOfPlayers) => (listOfPlayers.sort(() => Math.random() - 0.5));

const createInitialGames = (state) => ({...state, listOfRounds: createRoundFromArray(state.listOfPlayers)})

const createRoundFromArray = listOfPlayers => {
    return listOfPlayers.reduce((acc, player, index) => {
    if (index % 2 === 1) {
        return acc;
    }
    const game = {
        id: uuid(),
        playerOne: player,
        playerTwo: listOfPlayers[index + 1],
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
        winnerList: [...state.winnerList, player],
         
    }
}

const newRound = (state) => {
    return {
        ...state,
        listOfPlayers: state.winnerList,
        winnerList: [],
    }
}


const addNewPlayerAtStart = (state, {payload}) => {
    const player = payload;
    return {
        ...state,
        listOfPlayers: [...state.listOfPlayers, player]
    }
}


const reducer = (state, action) => {
    switch (action.type) {
        case "START_TOURNAMENT" : return createInitialGames(startTournament(state, action));
        case "SUBMIT_ROUND" : return createInitialGames(newRound(state, action));
        case "WINNER" : return gameWinner(state, action);
        case "ADD_PLAYER" : return addNewPlayerAtStart(state, action);
        case "RESET" : return reset();
        default : return state;
        
    }
}

export default reducer;
