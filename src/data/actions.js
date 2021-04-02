
export const tournamentStartAction = (tournamentData) => {
    return {
        type: "START_TOURNAMENT",
        payload: tournamentData,
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