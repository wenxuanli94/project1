// let playerA = {
//   name: "",
//   bank: 1000,
//   deed: 0,
//   position: 0,
// };
// console.log(playerA);
// let playerB = document.querySelector(".playerB");
// playerB = { name: "", bank: 1000, deed: 0, position: 0 };

let playerA = document.querySelector(".playerA");

let playerPos = 0;
let playerTurn;
let isGameRunning = false;
let turn = 0;
// let playerTurn = playerA;

const board = document.querySelector(".container");
const a0 = document.querySelector(".a0");
const a1 = document.querySelector(".a1");
const a2 = document.querySelector(".a2");
const a3 = document.querySelector(".a3");
const a4 = document.querySelector(".a4");
const a5 = document.querySelector(".a5");
const a6 = document.querySelector(".a6");
const a7 = document.querySelector(".a7");
const a8 = document.querySelector(".a8");
const a9 = document.querySelector(".a9");
const a10 = document.querySelector(".a10");
const b10 = document.querySelector(".b10");
const c10 = document.querySelector(".c10");
const d10 = document.querySelector(".d10");
const e10 = document.querySelector(".e10");
const f10 = document.querySelector(".f10");
const g10 = document.querySelector(".g10");
const h10 = document.querySelector(".h10");
const i10 = document.querySelector(".i10");
const j10 = document.querySelector(".j10");
const b0 = document.querySelector(".b0");
const c0 = document.querySelector(".c0");
const d0 = document.querySelector(".d0");
const e0 = document.querySelector(".e0");
const f0 = document.querySelector(".f0");
const g0 = document.querySelector(".g0");
const h0 = document.querySelector(".h0");
const i0 = document.querySelector(".i0");
const j0 = document.querySelector(".j0");
const j1 = document.querySelector(".j1");
const j2 = document.querySelector(".j2");
const j3 = document.querySelector(".j3");
const j4 = document.querySelector(".j4");
const j5 = document.querySelector(".j5");
const j6 = document.querySelector(".j6");
const j7 = document.querySelector(".j7");
const j8 = document.querySelector(".j8");
const j9 = document.querySelector(".j9");

const tilesData = [
  { tile: a0, deed: false, rent: 0, price: 0, position: 0 },
  { tile: a1, deed: false, rent: 0, price: 0, position: 1 },
  { tile: a2, deed: false, rent: 0, price: 0, position: 2 },
  { tile: a3, deed: false, rent: 0, price: 0, position: 3 },
  { tile: a4, deed: false, rent: 0, price: 0, position: 4 },
  { tile: a5, deed: false, rent: 0, price: 0, position: 5 },
  { tile: a6, deed: false, rent: 0, price: 0, position: 6 },
  { tile: a7, deed: false, rent: 0, price: 0, position: 7 },
  { tile: a8, deed: false, rent: 0, price: 0, position: 8 },
  { tile: a9, deed: false, rent: 0, price: 0, position: 9 },
  { tile: a10, deed: false, rent: 0, price: 0, position: 10 },
  { tile: b10, deed: false, rent: 0, price: 0, position: 11 },
  { tile: c10, deed: false, rent: 0, price: 0, position: 12 },
  { tile: d10, deed: false, rent: 0, price: 0, position: 13 },
  { tile: e10, deed: false, rent: 0, price: 0, position: 14 },
  { tile: f10, deed: false, rent: 0, price: 0, position: 15 },
  { tile: g10, deed: false, rent: 0, price: 0, position: 16 },
  { tile: h10, deed: false, rent: 0, price: 0, position: 17 },
  { tile: i10, deed: false, rent: 0, price: 0, position: 18 },
  { tile: j10, deed: false, rent: 0, price: 0, position: 19 },
  { tile: j9, deed: false, rent: 0, price: 0, position: 20 },
  { tile: j8, deed: false, rent: 0, price: 0, position: 21 },
  { tile: j7, deed: false, rent: 0, price: 0, position: 22 },
  { tile: j6, deed: false, rent: 0, price: 0, position: 23 },
  { tile: j5, deed: false, rent: 0, price: 0, position: 24 },
  { tile: j4, deed: false, rent: 0, price: 0, position: 25 },
  { tile: j3, deed: false, rent: 0, price: 0, position: 26 },
  { tile: j2, deed: false, rent: 0, price: 0, position: 27 },
  { tile: j1, deed: false, rent: 0, price: 0, position: 28 },
  { tile: j0, deed: false, rent: 0, price: 0, position: 29 },
  { tile: i0, deed: false, rent: 0, price: 0, position: 30 },
  { tile: h0, deed: false, rent: 0, price: 0, position: 31 },
  { tile: g0, deed: false, rent: 0, price: 0, position: 32 },
  { tile: f0, deed: false, rent: 0, price: 0, position: 33 },
  { tile: e0, deed: false, rent: 0, price: 0, position: 34 },
  { tile: d0, deed: false, rent: 0, price: 0, position: 35 },
  { tile: c0, deed: false, rent: 0, price: 0, position: 36 },
  { tile: b0, deed: false, rent: 0, price: 0, position: 37 },
];

playBtn = document.querySelector(".playBtn");

let roll = document.querySelector(".roll");

//game starts
function play() {
  if (!isGameRunning) {
    isGameRunning = true;
    playBtn.remove();
    a0.appendChild(playerA);
    playerPos = 0;
    playerA.innerHTML = `<img class="playerA" src="images/m.png" alt="player piece" />`;
  }
}

// function checkPlayerTurn() {
//   if (playerTurn === playerA) {
//     a0.appendChild(playerA);
//     playerA.innerText = "A";
//     playerTurn = playerB;
//   } else if (playerTurn === playerB) {
//     a0.appendChild(playerB);
//     playerB.innerText = "B";
//     playerTurn = playerA;
//     a0.appendChild(playerB);
//   }
// }

//Roll Dice Function
function rollDice() {
  //const diceRoll = 1;
  //Generate Random Dice
  const diceRoll = Math.floor(Math.random() * 6 + 1);
  console.log("Dice rolled", diceRoll);

  let newPosition = playerPos + diceRoll;
  if (newPosition > tilesData.length - 1) {
    newPosition -= tilesData.length;
    console.log("Pass Go");
  }
  tilesData[newPosition].tile.appendChild(playerA);
  playerPos = newPosition;
  playerA.innerHTML = `<img class="playerA" src="images/m.png" alt="player piece" />`;

  console.log(tilesData.length);
  console.log("New Position: " + newPosition);
  console.log("current playerPos", playerPos);
  console.log(tilesData[newPosition].position);
}
console.log(tilesData[0].position);
// player will get to buy property
function buyProperty() {
  if (
    playerPos === tilesData[playerPos].position &&
    !tilesData[playerPos].deed
  ) {
    console.log("this property is available");
    tilesData[playerPos].tile.style.backgroundColor = "red";
    tilesData[playerPos].deed = "true";
    console.log(tilesData[playerPos].deed);
  }
}

//check number of check and end game
const restartBtn = document.createElement("button");

function turnCheck() {
  turn++;
  if (turn >= 3) {
    console.log("Game ends");
    restartBtn.innerText = "Restart";
    restartBtn.classList.add("restartBtn");
    board.appendChild(restartBtn);
    roll.remove();
    isGameRunning = false;
  }
  console.log("turn", turn);
  console.log(isGameRunning);
}

function restartGame() {
  if (!isGameRunning) {
  }
}

playBtn.addEventListener("click", () => {
  play();
});

// playBtn.addEventListener("click", () => {
//   checkPlayerTurn();
// });

roll.addEventListener("click", () => rollDice());

roll.addEventListener("click", () => buyProperty());

roll.addEventListener("click", () => turnCheck());
