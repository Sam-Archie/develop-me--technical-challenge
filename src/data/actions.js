
export const tournamentStartAction = (tournamentData) => {
    return {
        type: "START_TOURNAMENT",
        payload: tournamentData,
    }
}
