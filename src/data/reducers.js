import initialState  from "./initial";
import {v4 as uuid} from "uuid";


const startTournament = (state, {payload}) => ({
    ...state, 
    listOfPlayers: randomizer([...state.listOfPlayers]),
    tournamentName: payload.name, 
    tournamentStarted: true,
    winningScore: payload.winningScore, 
    tournamentId: payload.id, 
    roundNumber: 1,
    listOfGames: payload.games
})

const randomizer = (listOfPlayers) => (listOfPlayers.sort(() => Math.random() - 0.5));

const reset = () => {
    return {
        ...initialState,
    }
}

const gameWinner = (state, {payload}) => {
    return {
      ...state,
      listOfPlayers: [...state.listOfPlayers.filter((player) => player.id !== payload.player.id)],
    };
}

const newRound = (state, {payload}) => {
    return {
      ...state,
      listOfGames: payload,
    };
}


const addNewPlayerAtStart = (state, {payload}) => {

    const player = {
        id : uuid(),
        name : payload
    };

    return {
        ...state,
        listOfPlayers: [...state.listOfPlayers, player]
    }
}

const loadHistoricPlayers = (state, {payload}) => {

    return {
        ...state,
        historicPlayerList: payload,
    }
}


const reducer = (state, action) => {
    switch (action.type) {
        case "START_TOURNAMENT" : return startTournament(state, action);
        case "SUBMIT_ROUND" : return newRound(state, action);
        case "WINNER" : return gameWinner(state, action);
        case "ADD_PLAYER" : return addNewPlayerAtStart(state, action);
        case "LOAD_HISTORIC_PLAYERS" : return loadHistoricPlayers(state, action);
        case "RESET" : return reset();
        default : return state;
        
    }
}

export default reducer;
