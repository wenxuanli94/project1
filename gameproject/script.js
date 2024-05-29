// let playerB = document.querySelector(".playerB");
// playerB = { name: "", bank: 1000, deed: 0, position: 0 };

let playerA = document.querySelector(".playerA");

let playerPos = 0;
let playerTurn = 0;
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
const a11 = document.querySelector(".a11");
const a12 = document.querySelector(".a12");
const a13 = document.querySelector(".a13");
const a14 = document.querySelector(".a14");
const a15 = document.querySelector(".a15");
const a16 = document.querySelector(".a16");
const a17 = document.querySelector(".a17");
const a18 = document.querySelector(".a18");
const a19 = document.querySelector(".a19");
const a20 = document.querySelector(".a20");
const a21 = document.querySelector(".a21");
const a22 = document.querySelector(".a22");
const a23 = document.querySelector(".a23");
const a24 = document.querySelector(".a24");
const a25 = document.querySelector(".a25");
const a26 = document.querySelector(".a26");
const a27 = document.querySelector(".a27");
const a28 = document.querySelector(".a28");
const a29 = document.querySelector(".a29");
const a30 = document.querySelector(".a30");
const a31 = document.querySelector(".a31");
const a32 = document.querySelector(".a32");
const a33 = document.querySelector(".a33");
const a34 = document.querySelector(".a34");
const a35 = document.querySelector(".a35");
const a36 = document.querySelector(".a36");
const a37 = document.querySelector(".a37");

const tilesData = [
  { tile: a0, deed: false, rent: 0, price: 100, position: 0 },
  { tile: a1, deed: true, rent: 0, price: 100, position: 1 },
  { tile: a2, deed: false, rent: 0, price: 100, position: 2 },
  { tile: a3, deed: true, rent: 0, price: 100, position: 3 },
  { tile: a4, deed: false, rent: 0, price: 100, position: 4 },
  { tile: a5, deed: false, rent: 0, price: 100, position: 5 },
  { tile: a6, deed: true, rent: 0, price: 100, position: 6 },
  { tile: a7, deed: false, rent: 0, price: 100, position: 7 },
  { tile: a8, deed: true, rent: 0, price: 100, position: 8 },
  { tile: a9, deed: true, rent: 0, price: 100, position: 9 },
  { tile: a10, deed: false, rent: 0, price: 100, position: 10 },
  { tile: a11, deed: true, rent: 0, price: 100, position: 11 },
  { tile: a12, deed: false, rent: 0, price: 100, position: 12 },
  { tile: a13, deed: true, rent: 0, price: 100, position: 13 },
  { tile: a14, deed: true, rent: 0, price: 100, position: 14 },
  { tile: a15, deed: false, rent: 0, price: 100, position: 15 },
  { tile: a16, deed: true, rent: 0, price: 100, position: 16 },
  { tile: a17, deed: false, rent: 0, price: 100, position: 17 },
  { tile: a18, deed: true, rent: 0, price: 100, position: 18 },
  { tile: a19, deed: false, rent: 0, price: 100, position: 19 },
  { tile: a20, deed: true, rent: 0, price: 100, position: 20 },
  { tile: a21, deed: false, rent: 0, price: 100, position: 21 },
  { tile: a22, deed: true, rent: 0, price: 100, position: 22 },
  { tile: a23, deed: true, rent: 0, price: 100, position: 23 },
  { tile: a24, deed: false, rent: 0, price: 100, position: 24 },
  { tile: a25, deed: true, rent: 0, price: 100, position: 25 },
  { tile: a26, deed: true, rent: 0, price: 100, position: 26 },
  { tile: a27, deed: false, rent: 0, price: 100, position: 27 },
  { tile: a28, deed: true, rent: 0, price: 100, position: 28 },
  { tile: a29, deed: false, rent: 0, price: 100, position: 29 },
  { tile: a30, deed: true, rent: 0, price: 100, position: 30 },
  { tile: a31, deed: true, rent: 0, price: 100, position: 31 },
  { tile: a32, deed: false, rent: 0, price: 100, position: 32 },
  { tile: a33, deed: true, rent: 0, price: 100, position: 33 },
  { tile: a34, deed: false, rent: 0, price: 100, position: 34 },
  { tile: a35, deed: false, rent: 0, price: 100, position: 35 },
  { tile: a36, deed: true, rent: 0, price: 100, position: 36 },
  { tile: a37, deed: true, rent: 0, price: 100, position: 37 },
];

const playerData = [
  { name: playerA, bank: 1000, Deed: 0, Assest: 1000 },
  //{ name: playerB, bank: 1000, Deed: 0, Assest: 1000 },
];

const playerStat = document.querySelector(".playerStat");
const comment = document.querySelector(".comment");
const playBtn = document.querySelector(".playBtn");
const roll = document.querySelector(".roll");

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
  // const diceRoll = 1;
  // //Generate Random Dice
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
    tilesData[playerPos].deed
  ) {
    comment.innerText = "You have purchased this property!";
    console.log("this property is available");
    tilesData[playerPos].tile.style.backgroundColor = "red";
    tilesData[playerPos].deed = "false";
    console.log(tilesData[playerPos].deed);
    setTimeout(clearText, 1000);
    playerStat.innerText = ``;
    playerData[playerTurn].Deed++;
    playerData[playerTurn].bank -= tilesData[playerPos].price;
    playerStat.innerText = `Bank: $${playerData[playerTurn].bank} Property: ${playerData[playerTurn].Deed}`;
  }
}

function clearText() {
  comment.innerText = "";
}

//check number of check and end game
const restartBtn = document.createElement("button");

function turnCheck() {
  turn++;
  if (turn >= 60) {
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

function passGo() {}

function restartGame() {
  if (!isGameRunning) {
    location.reload();
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

restartBtn.addEventListener("click", () => restartGame());
