const playerB = document.querySelector(".playerB");
const playerA = document.querySelector(".playerA");
let player = playerA;
console.log(player);
let playerPos = 0;
let playerTurn = 0;
let opponent = 1;
console.log("playerturn", playerTurn);

let isGameRunning = false;
let turn = 0;
// const payRentBtn = document.createElement("button");
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

const playerBStat = document.querySelector(".playerBStat");
const playerAStat = document.querySelector(".playerAStat");

const tilesData = [
  {
    tile: a0,
    deed: false,
    rent: 0,
    price: 100,
    position: 0,
    ownBy: "",
    color: "",
  },
  {
    tile: a1,
    deed: true,
    rent: 50,
    price: 100,
    position: 1,
    ownBy: "",
    color: "",
  },
  {
    tile: a2,
    deed: false,
    rent: 0,
    price: 100,
    position: 2,
    ownBy: "",
    color: "",
  },
  {
    tile: a3,
    deed: true,
    rent: 50,
    price: 100,
    position: 3,
    ownBy: "",
    color: "",
  },
  {
    tile: a4,
    deed: false,
    rent: 0,
    price: 100,
    position: 4,
    ownBy: "",
    color: "",
  },
  {
    tile: a5,
    deed: false,
    rent: 0,
    price: 100,
    position: 5,
    ownBy: "",
    color: "",
  },
  {
    tile: a6,
    deed: true,
    rent: 50,
    price: 100,
    position: 6,
    ownBy: "",
    color: "",
  },
  {
    tile: a7,
    deed: false,
    rent: 0,
    price: 100,
    position: 7,
    ownBy: "",
    color: "",
  },
  {
    tile: a8,
    deed: true,
    rent: 50,
    price: 100,
    position: 8,
    ownBy: "",
    color: "",
  },
  {
    tile: a9,
    deed: true,
    rent: 50,
    price: 100,
    position: 9,
    ownBy: "",
    color: "",
  },
  {
    tile: a10,
    deed: false,
    rent: 0,
    price: 100,
    position: 10,
    ownBy: "",
    color: "",
  },
  {
    tile: a11,
    deed: true,
    rent: 50,
    price: 100,
    position: 11,
    ownBy: "",
    color: "",
  },
  {
    tile: a12,
    deed: false,
    rent: 0,
    price: 100,
    position: 12,
    ownBy: "",
    color: "",
  },
  {
    tile: a13,
    deed: true,
    rent: 50,
    price: 100,
    position: 13,
    ownBy: "",
    color: "",
  },
  {
    tile: a14,
    deed: true,
    rent: 50,
    price: 100,
    position: 14,
    ownBy: "",
    color: "",
  },
  {
    tile: a15,
    deed: false,
    rent: 0,
    price: 100,
    position: 15,
    ownBy: "",
    color: "",
  },
  {
    tile: a16,
    deed: true,
    rent: 50,
    price: 100,
    position: 16,
    ownBy: "",
    color: "",
  },
  {
    tile: a17,
    deed: false,
    rent: 0,
    price: 100,
    position: 17,
    ownBy: "",
    color: "",
  },
  {
    tile: a18,
    deed: true,
    rent: 50,
    price: 100,
    position: 18,
    ownBy: "",
    color: "",
  },
  {
    tile: a19,
    deed: false,
    rent: 0,
    price: 100,
    position: 19,
    ownBy: "",
    color: "",
  },
  {
    tile: a20,
    deed: true,
    rent: 50,
    price: 100,
    position: 20,
    ownBy: "",
    color: "",
  },
  {
    tile: a21,
    deed: false,
    rent: 0,
    price: 100,
    position: 21,
    ownBy: "",
    color: "",
  },
  {
    tile: a22,
    deed: true,
    rent: 50,
    price: 100,
    position: 22,
    ownBy: "",
    color: "",
  },
  {
    tile: a23,
    deed: true,
    rent: 50,
    price: 100,
    position: 23,
    ownBy: "",
    color: "",
  },
  {
    tile: a24,
    deed: false,
    rent: 0,
    price: 100,
    position: 24,
    ownBy: "",
    color: "",
  },
  {
    tile: a25,
    deed: true,
    rent: 50,
    price: 100,
    position: 25,
    ownBy: "",
    color: "",
  },
  {
    tile: a26,
    deed: true,
    rent: 50,
    price: 100,
    position: 26,
    ownBy: "",
    color: "",
  },
  {
    tile: a27,
    deed: false,
    rent: 0,
    price: 100,
    position: 27,
    ownBy: "",
    color: "",
  },
  {
    tile: a28,
    deed: true,
    rent: 50,
    price: 100,
    position: 28,
    ownBy: "",
    color: "",
  },
  {
    tile: a29,
    deed: false,
    rent: 0,
    price: 100,
    position: 29,
    ownBy: "",
    color: "",
  },
  {
    tile: a30,
    deed: true,
    rent: 50,
    price: 100,
    position: 30,
    ownBy: "",
    color: "",
  },
  {
    tile: a31,
    deed: true,
    rent: 50,
    price: 100,
    position: 31,
    ownBy: "",
    color: "",
  },
  {
    tile: a32,
    deed: false,
    rent: 0,
    price: 100,
    position: 32,
    ownBy: "",
    color: "",
  },
  {
    tile: a33,
    deed: true,
    rent: 50,
    price: 100,
    position: 33,
    ownBy: "",
    color: "",
  },
  {
    tile: a34,
    deed: false,
    rent: 0,
    price: 100,
    position: 34,
    ownBy: "",
    color: "",
  },
  {
    tile: a35,
    deed: false,
    rent: 0,
    price: 100,
    position: 35,
    ownBy: "",
    color: "",
  },
  {
    tile: a36,
    deed: true,
    rent: 50,
    price: 100,
    position: 36,
    ownBy: "",
    color: "",
  },
  {
    tile: a37,
    deed: true,
    rent: 50,
    price: 100,
    position: 37,
    ownBy: "",
    color: "",
  },
];

const playerData = [
  {
    idx: 0,
    name: playerA,
    bank: 10000,
    Deed: 0,
    Asset: 1000,
    player: 0,
    startingStats: playerAStat,
    color: "red",
  },
  {
    indx: 1,
    name: playerB,
    bank: 10000,
    Deed: 0,
    Assest: 1000,
    player: 1,
    startingStats: playerBStat,
    color: "yellow",
  },
];
console.log(playerData[playerTurn].name);
const comment = document.querySelector(".comment");
const playBtn = document.querySelector(".playBtn");
const roll = document.querySelector(".roll");

//game starts
function play() {
  if (!isGameRunning) {
    isGameRunning = true;
    playBtn.remove();
    a0.appendChild(playerA, playerB);

    playerPos = 0;

    playerA.innerHTML = `<img class="playerA" src="images/m.png" alt="player piece" />`;
    playerB.innerHTML = `<img class="playerB" src="images/pikachu.png" alt="player piece" />`;

    playerAStat.innerText = `Bank: $${playerData[playerTurn].bank} Property: ${playerData[playerTurn].Deed}`;

    playerBStat.innerText = `Bank: $${playerData[playerTurn].bank} Property: ${playerData[playerTurn].Deed}`;
  }
}

function checkPlayerTurn() {
  if (playerTurn === 0) {
    console.log("it is player A turn");
    playerTurn += 1;
    opponent -= 1;
  } else if (playerTurn === 1) {
    console.log("it is player B turn");
    playerTurn -= 1;
    opponent += 1;
  }
}

//Roll Dice Function
function rollDice(player) {
  // const diceRoll = 1;
  // //Generate Random Dice
  const diceRoll = Math.floor(Math.random() * 12 + 1);
  console.log("Dice rolled", diceRoll);

  let newPosition = playerPos + diceRoll;
  if (newPosition > tilesData.length - 1) {
    newPosition -= tilesData.length;
    console.log("Pass Go");
  }
  tilesData[newPosition].tile.appendChild(playerData[playerTurn].name);
  console.log(playerData[playerTurn].name);
  playerPos = newPosition;
  playerData[playerTurn].position = playerPos;
  console.log("playerdata", (playerData[playerTurn].position = playerPos));
  console.log("playerdata", playerData[playerTurn]);
  // playerA.innerHTML = `<img class="playerA" src="images/pikachu.png" alt="player piece" />`;

  console.log(tilesData.length);
  console.log("New Position: " + newPosition);
  console.log("current playerPos", playerPos);
  console.log("tiles info", tilesData[newPosition]);
}
console.log(tilesData[0].position);
// player will get to buy property
function buyProperty() {
  if (
    tilesData[playerPos].deed === true &&
    playerData[playerTurn].bank >= tilesData[playerPos].price
  ) {
    comment.innerText = "You have purchased this property!";
    console.log("this property is available");
    tilesData[playerPos].tile.style.backgroundColor =
      playerData[playerTurn].color;
    tilesData[playerPos].color = playerData[playerTurn].color;
    tilesData[playerPos].deed = "taken";
    tilesData[playerPos].ownBy = playerData[playerTurn].name;
    console.log("check if own by is updated", tilesData[playerPos]);
    console.log(tilesData[playerPos].deed);
    setTimeout(clearText, 1000);
    playerData[playerTurn].Deed++;
    playerData[playerTurn].bank -= tilesData[playerPos].price;
    tilesData[playerPos].price = 0;

    playerData[
      playerTurn
    ].startingStats.innerText = `Bank: $${playerData[playerTurn].bank} Property: ${playerData[playerTurn].Deed}`;
  }
}

function checkIfReadyToRent() {
  if (tilesData[playerPos].deed === "taken") {
    tilesData[playerPos].deed = "ready to rent";
  } else if (tilesData[playerPos].deed === "ready to rent") {
    payRent();
  }
}

function payRent() {
  if (
    tilesData[playerPos].ownBy !== playerA &&
    playerData[0].bank >= tilesData[playerPos].rent
  ) {
    console.log("before transaction", playerData);
    playerData[0].bank -= tilesData[playerPos].rent;
    playerData[1].bank += tilesData[playerPos].rent;
    console.log("after transaction", playerData);
    playerAStat.innerText = `Bank: $${playerData[0].bank} Property: ${playerData[0].Deed}`;
    playerBStat.innerText = `Bank: $${playerData[1].bank} Property: ${playerData[1].Deed}`;
  } else if (
    tilesData[playerPos].ownBy !== playerB &&
    playerData[1].bank >= tilesData[playerPos].rent
  ) {
    console.log("before transaction", playerData);
    playerData[1].bank -= tilesData[playerPos].rent;
    playerData[0].bank += tilesData[playerPos].rent;
    console.log("after transaction", playerData);
    playerAStat.innerText = `Bank: $${playerData[0].bank} Property: ${playerData[0].Deed}`;
    playerBStat.innerText = `Bank: $${playerData[1].bank} Property: ${playerData[1].Deed}`;
  } else {
    console.log("You do not have enough to cash to pay rent");
  }
}

// // player will pay rent when landing on taken property
// function payRent() {
//   if (
//     tilesData[playerPos].deed === "taken" &&
//     tilesData[playerPos].ownBy !== playerData[playerTurn].idx
//   ) {
//     console.log("player turn idx", playerTurn);
//     console.log("opponent idx", opponent);
//     console.log("playerdata", playerData);
//     playerData[playerTurn].bank -= tilesData[playerPos].rent;
//     playerData[opponent].bank += tilesData[playerPos].rent;
//     console.log("playerdata", playerData);

//     playerAStat.innerText = `Bank: $${playerData[playerTurn].bank} Property: ${playerData[playerTurn].Deed}`;

//     playerBStat.innerText = `Bank: $${playerData[playerTurn].bank} Property: ${playerData[playerTurn].Deed}`;

// payRentBtn.classList.add(".payRent");
// payRent.innerText = "Pay rent";
// board.appendChild(payRentBtn);
//}
//}

function clearText() {
  comment.innerText = "";
}

//check number of check and end game
const restartBtn = document.createElement("button");

function turnCheck() {
  turn++;
  if (turn >= 1000) {
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

roll.addEventListener("click", () => checkPlayerTurn());

roll.addEventListener("click", () => rollDice());

roll.addEventListener("click", () => buyProperty());

roll.addEventListener("click", () => turnCheck());

roll.addEventListener("click", () => checkIfReadyToRent());

restartBtn.addEventListener("click", () => restartGame());
