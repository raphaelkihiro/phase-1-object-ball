function gameObject() {
  return {
    home: {
      teamName: "Brookyln Nets",
      colors: ["Black", "white"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assist: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },

        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },

        "Brooks Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },

        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },

        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },

        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },

        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },

        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },

        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
}
console.log(gameObject());

//Building Functions
//calling Functions Wiyhin Functions

function homeTeamName() {
  let object = gameObject();
  return object["home"]["teamName"];
}

console.log(homeTeamName());

function awayColors() {
  let object = gameObject();
  return object["away"]["colors"];
}
console.log(awayColors());

function awayPlayers() {
  let object = gameObject();
  return object["away"]["players"];
}

console.log(awayPlayers());

function homePlayers() {
  let object = gameObject();
  return object["home"]["players"];
}

console.log(homePlayers());

function awaypoints() {
  let object = gameObject();
  return object["away"]["points"];
}
console.log(awaypoints());

function awayTeamName() {
  return gameObject()["away"]["teamName"];
}

console.log(awayTeamName());

function homePlayersAlanAnderson() {
  return gameObject()["home"]["players"]["Alan Anderson"];
}
console.log(homePlayersAlanAnderson());

function awayPlayersJeffAdrienSteals() {
  return gameObject()["away"]["players"]["Jeff Adrien"]["steals"];
}
console.log;(awayPlayersJeffAdrienSteals());
