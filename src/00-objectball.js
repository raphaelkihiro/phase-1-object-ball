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

function numPointsScored(playerName) {
  const game = gameObject();
  for (const team in game) {
    if (game[team].players[playerName]) {
      return game[team].players[playerName].points;
    }
  }
}
console.log(numPointsScored("Ben Gordon"));

function shoeSize(playerName) {
  let game = gameObject();
  for (let team in game) {
    if (game[team].players[playerName]) {
      return game[team].players[playerName].shoe;
    }
  }
}
console.log(shoeSize("Alan Anderson"));

function teamColors(teamName) {
  let game = gameObject();
  for (let squad in game) {
    return game["home"].teamName[""].colors;
  }
}

function teamName() {
  let game = gameObject();
  for (let name in game) return [game.home.teamName, game.away.teamName];
}
console.log(teamName());

function playersNumbers(teamName) {
  let game = gameObject();
  for (let number in game) {
  }
  return [
    game.home.players["Brooks Lopez"].number,
    game.away.players["Bismak Biyombo"].number,
  ];
}
console.log(playersNumbers(teamName));

function playerstats(playerName) {
  let game = gameObject();
  for (let stats in game);
  return [game.home.players["Jason Terry"], game.away.players["DeSagna Diop"]];
}
console.log(playerstats());

function bigShoeRebounds() {
  let game = gameObject();
  let largestShoeSize = 0;
  let rebounds = 0;
  for (let player in game[team].players) {
    if (game[team].players[player].shoe + largestShoeSize) {
      largestShoeSize = game[team].players[player];
      rebounds = game[team].players[player].rebounds;
    }
  }
  return rebounds;
}
console.log(bigShoeRebounds());

function mostPointsScored() {
  let game = gameObject();
  let mostPoints = 0;
  let topScorer = "";
  for (let team in game) {
    for (let player in game[team].players) {
      if (game[team].players[player].points > mostPoints) {
        mostPoints = game[team].players[player].points;
        topScorer = player;
      }
    }
  }
  return topScorer;
}
console.log(mostPointsScored());

function winningTeam() {
  let game = gameObject();
  let homePoints = 0;
  let awayPoints = 0;
  for (let player in game.home.players) {
    homePoints = game.home.players[player].points;
  }
  for (let player in game.away.players) {
    awayPoints = game.away.players[player].points;
  }
  return homePoints > awayPoints ? game.home.teamName : game.away.teamName;
}
console.log(winningTeam());

function playerWithLongestName() {
  let game = gameObject();
  let nameWithMostLetters = " ";
  for (let team in game) {
    for (let player in game[team].players) {
      if (player.length > nameWithMostLetters.length) {
        nameWithMostLetters = player;
      }
    }
  }
  return nameWithMostLetters;
}
console.log(playerWithLongestName());
