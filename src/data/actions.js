import {v4 as uuid} from "uuid";
import axios from "../axios";

export const createGamesFromPlayers = (listOfPlayers, tournamentId, roundNumber) => {
  return listOfPlayers.reduce((acc, player, index) => {
    if (index % 2 === 1) {
      return acc;
    }
    const game = {
      id: uuid(),
      roundNumber: roundNumber,
      tournamentId: tournamentId,
      playerA: player,
      playerB: listOfPlayers[index + 1],
      playerAScore: 0,
      playerBScore: 0,
    };
    return [...acc, game];
  }, []);
};


export const tournamentStartAction = (tournamentData) => {
    
    const tournament = {
        id: uuid(),
        name: tournamentData.tournamentName,
        entrants : tournamentData.entrants,
        winningScore: tournamentData.winningScore
    }

    const games = createGamesFromPlayers(tournamentData.entrants, tournament.id, 1);

    axios.post("/tournaments", tournament)
    axios.post("/games", games);

    return {
      type: "START_TOURNAMENT",
      payload: {
        ...tournament,
        games: games
      },
    };
}

export const resetAction = () => {
    return {
        type: "RESET",
    }
}

export const gameWinnerAction = (player, roundNumber) => {
    return {
        type: "WINNER",
        payload: {player: player, roundNumber: roundNumber},
    }
}

export const submitRoundAction = (listOfWinners, tournamentId, roundNumber) => {
   const games = createGamesFromPlayers(
     listOfWinners,
     tournamentId,
     roundNumber
   );
    return {
        type: "SUBMIT_ROUND",
        payload: games,
    }
}


export const addPlayerNameAction = (player) => {
    return {
        type: "ADD_PLAYER",
        payload: player
    }
}