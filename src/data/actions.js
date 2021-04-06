import {v4 as uuid} from "uuid";
import axios from "../axios";


export const tournamentStartAction = (tournamentData) => {

    const requestObject = {
        id: uuid(),
        name: tournamentData.tournamentName,
        entrants : tournamentData.entrants,
        winningScore: tournamentData.winningScore
    }

    axios.post("/tournaments", requestObject
    ).then((response) => {
        console.log(response)
    })
    
    return {
        type: "START_TOURNAMENT",
        payload: requestObject,
    }

}

export const resetAction = () => {
    return {
        type: "RESET",
    }
}

export const gameWinnerAction = (player) => {
    return {
        type: "WINNER",
        payload: player,
    }
}

export const submitRoundAction = () => {
    return {
        type: "SUBMIT_ROUND",
    }
}


export const addPlayerNameAction = (player) => {
    return {
        type: "ADD_PLAYER",
        payload: player
    }
}