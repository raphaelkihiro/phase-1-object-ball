function gameObject(home, away) {
  console.log(home);
  console.log(away);
  return home, away;

  home = {
    teamName: "Brookyln Nets",
    colors: [`Black, white`],
    players: {
      playerName: "Alan Anderson",
      number: 0,
      shoe: 16,
      points: 22,
      rebounds: 12,
      assist: 12,
      steals: 3,
      blocks: 1,
      slamDunks: 1,

      playerName: "Reggie Evans",
      number: 30,
      shoe: 14,
      points: 12,
      rebounds: 12,
      assists: 12,
      steals: 12,
      blocks: 12,
      slamDunks: 7,

      playerName: "Brooks Lopez",
      number: 11,
      shoe: 17,
      points: 17,
      rebounds: 19,
      assists: 10,
      steals: 3,
      blocks: 1,
      slamDunks: 15,

      playerName: "Mason Plumlee",
      number: 1,
      shoe: 19,
      points: 26,
      rebounds: 12,
      assists: 6,
      steals: 3,
      blocks: 8,
      slamDunks: 5,

      playerName: "Jason Terry",
      number: 31,
      shoe: 15,
      points: 19,
      rebounds: 2,
      assists: 2,
      steals: 4,
      blocks: 11,
      slamDunks: 1,
    },
  };
  away = {
    teamName: "Charlotte Hornets",
    colors: [
      `Turquoise,
      Purple`,
    ],
    players: {
      playerName: "Jeff Adrien",
      number: 4,
      shoe: 18,
      points: 10,
      rebounds: 1,
      assists: 1,
      steals: 2,
      blocks: 7,
      slamDunks: 2,

      playerName: "Bismak Biyombo",
      number: 0,
      shoe: 16,
      points: 12,
      rebounds: 4,
      assists: 7,
      steals: 7,
      blocks: 15,
      slamDunks: 10,

      playerName: "DeSagna Diop",
      number: 2,
      shoe: 14,
      points: 24,
      rebounds: 12,
      assists: 12,
      steals: 4,
      blocks: 5,
      slamDunks: 5,

      playerName: "Ben Gordon",
      number: 8,
      shoe: 15,
      points: 33,
      rebounds: 3,
      assists: 2,
      steals: 1,
      blocks: 1,
      slamDunks: 0,

      playerName: "Brendan Haywood",
      number: 33,
      shoe: 15,
      points: 6,
      rebounds: 12,
      assists: 12,
      steals: 22,
      blocks: 5,
      slamDunks: 12,
    },
  };
}

console.log(gameObject("playerName"));

function homeTeamName() {
  let object = gameObject;
  return object["home"]["teamName"];
}

console.log(homeTeamName());




let oo = { foo: 42, bar: 83, baz: "key w/ spaces": true };
console.log(oo["foo"]);
console.log(oo["bar"]);
console.log(oo["key w/ spaces"]);

console.log(oo.foo);
console.log(oo.bar);

let oo = { foo: 42, bar: 83, baz: 79 };
for (let value = oo) {
    let value = oo[key];
    console.log("key:", key, "value", value)
}