const playerB = document.querySelector(".playerB");
const playerA = document.querySelector(".playerA");
//let player = playerA;
let playerPos = 0;
//let player0 = 0
//let player1 = 1
let playerTurn = 1;
let opponent = 0;
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
    readyToRent: "no",
    color: "",
  },
  {
    tile: a1,
    deed: true,
    rent: 2,
    price: 60,
    position: 1,
    ownBy: "",
    readyToRent: "no",
    color: "",
  },
  {
    tile: a2,
    deed: "Draw Chest",
    rent: 0,
    price: 100,
    position: 2,
    ownBy: "",
    readyToRent: "no",
    color: "",
  },
  {
    tile: a3,
    deed: true,
    rent: 4,
    price: 60,
    position: 3,
    ownBy: "",
    readyToRent: "no",
    color: "",
  },
  {
    tile: a4,
    deed: false,
    rent: 0,
    price: 100,
    position: 4,
    ownBy: "",
    readyToRent: "no",
    color: "",
  },
  {
    tile: a5,
    deed: false,
    rent: 0,
    price: 100,
    position: 5,
    ownBy: "",
    readyToRent: "no",
    color: "",
  },
  {
    tile: a6,
    deed: true,
    rent: 6,
    price: 100,
    position: 6,
    ownBy: "",
    readyToRent: "no",
    color: "",
  },
  {
    tile: a7,
    deed: "Draw Chance",
    rent: 0,
    price: 100,
    position: 7,
    ownBy: "",
    readyToRent: "no",
    color: "",
  },
  {
    tile: a8,
    deed: true,
    rent: 6,
    price: 100,
    position: 8,
    ownBy: "",
    readyToRent: "no",
    color: "",
  },
  {
    tile: a9,
    deed: true,
    rent: 8,
    price: 120,
    position: 9,
    ownBy: "",
    readyToRent: "no",
    color: "",
  },
  {
    tile: a10,
    deed: "jailTime",
    rent: 0,
    price: 100,
    position: 10,
    ownBy: "",
    readyToRent: "no",
    color: "",
  },
  {
    tile: a11,
    deed: true,
    rent: 140,
    price: 10,
    position: 11,
    ownBy: "",
    readyToRent: "no",
    color: "",
  },
  {
    tile: a12,
    deed: false,
    rent: 0,
    price: 100,
    position: 12,
    ownBy: "",
    readyToRent: "no",
    color: "",
  },
  {
    tile: a13,
    deed: true,
    rent: 10,
    price: 140,
    position: 13,
    ownBy: "",
    readyToRent: "no",
    color: "",
  },
  {
    tile: a14,
    deed: true,
    rent: 12,
    price: 160,
    position: 14,
    ownBy: "",
    readyToRent: "no",
    color: "",
  },
  {
    tile: a15,
    deed: false,
    rent: 0,
    price: 100,
    position: 15,
    ownBy: "",
    readyToRent: "no",
    color: "",
  },
  {
    tile: a16,
    deed: true,
    rent: 14,
    price: 180,
    position: 16,
    ownBy: "",
    readyToRent: "no",
    color: "",
  },
  {
    tile: a17,
    deed: "Draw Chest",
    rent: 0,
    price: 100,
    position: 17,
    ownBy: "",
    readyToRent: "no",
    color: "",
  },
  {
    tile: a18,
    deed: true,
    rent: 14,
    price: 180,
    position: 18,
    ownBy: "",
    readyToRent: "no",
    color: "",
  },
  {
    tile: a19,
    deed: false,
    rent: 0,
    price: 100,
    position: 19,
    ownBy: "",
    readyToRent: "no",
    color: "",
  },
  {
    tile: a20,
    deed: true,
    rent: 18,
    price: 220,
    position: 20,
    ownBy: "",
    readyToRent: "no",
    color: "",
  },
  {
    tile: a21,
    deed: "Draw Chance",
    rent: 0,
    price: 100,
    position: 21,
    ownBy: "",
    readyToRent: "no",
    color: "",
  },
  {
    tile: a22,
    deed: true,
    rent: 18,
    price: 220,
    position: 22,
    ownBy: "",
    readyToRent: "no",
    color: "",
  },
  {
    tile: a23,
    deed: true,
    rent: 20,
    price: 240,
    position: 23,
    ownBy: "",
    readyToRent: "no",
    color: "",
  },
  {
    tile: a24,
    deed: false,
    rent: 0,
    price: 100,
    position: 24,
    ownBy: "",
    readyToRent: "no",
    color: "",
  },
  {
    tile: a25,
    deed: true,
    rent: 22,
    price: 260,
    position: 25,
    ownBy: "",
    readyToRent: "no",
    color: "",
  },
  {
    tile: a26,
    deed: true,
    rent: 22,
    price: 260,
    position: 26,
    ownBy: "",
    readyToRent: "no",
    color: "",
  },
  {
    tile: a27,
    deed: false,
    rent: 0,
    price: 100,
    position: 27,
    ownBy: "",
    readyToRent: "no",
    color: "",
  },
  {
    tile: a28,
    deed: true,
    rent: 22,
    price: 280,
    position: 28,
    ownBy: "",
    readyToRent: "no",
    color: "",
  },
  {
    tile: a29,
    deed: false,
    rent: 0,
    price: 100,
    position: 29,
    ownBy: "",
    readyToRent: "no",
    color: "",
  },
  {
    tile: a30,
    deed: true,
    rent: 26,
    price: 300,
    position: 30,
    ownBy: "",
    readyToRent: "no",
    color: "",
  },
  {
    tile: a31,
    deed: true,
    rent: 26,
    price: 300,
    position: 31,
    ownBy: "",
    readyToRent: "no",
    color: "",
  },
  {
    tile: a32,
    deed: "Draw Chest",
    rent: 0,
    price: 100,
    position: 32,
    ownBy: "",
    readyToRent: "no",
    color: "",
  },
  {
    tile: a33,
    deed: true,
    rent: 28,
    price: 320,
    position: 33,
    ownBy: "",
    readyToRent: "no",
    color: "",
  },
  {
    tile: a34,
    deed: false,
    rent: 0,
    price: 100,
    position: 34,
    ownBy: "",
    readyToRent: "no",
    color: "",
  },
  {
    tile: a35,
    deed: "Draw Chance",
    rent: 0,
    price: 100,
    position: 35,
    ownBy: "",
    readyToRent: "no",
    color: "",
  },
  {
    tile: a36,
    deed: true,
    rent: 35,
    price: 350,
    position: 36,
    ownBy: "",
    readyToRent: "no",
    color: "",
  },
  {
    tile: a37,
    deed: true,
    rent: 50,
    price: 400,
    position: 37,
    ownBy: "",
    readyToRent: "no",
    color: "",
  },
];

const playerData = [
  {
    idx: 0,
    name: playerA,
    bank: 1500,
    Deed: 0,
    Asset: 100,
    player: 0,
    startingStats: playerAStat,
    color: "red",
    position: 0,
  },
  {
    indx: 1,
    name: playerB,
    bank: 1500,
    Deed: 0,
    Assest: 1000,
    player: 1,
    startingStats: playerBStat,
    color: "yellow",
    position: 0,
  },
];

const chanceCards = [
  { Title: "chance card selection" },
  { name: "Bankerror", payment: 50, idx: 1 },
  { name: "Stock sale", payment: 50, idx: 2 },
  { name: "Its your birthday!", payment: 10, idx: 3 },
  { name: "Life insurance matures", payment: 50, idx: 4 },
  { name: "Hospital fees", payment: -100, idx: 5 },
  { name: "School fees", payment: -50, idx: 6 },
  { name: "Consultancy fee", payment: -25, idx: 7 },
  { name: "Beauty contest", payment: 10, idx: 8 },
  { name: "Inheritance", payment: 100, idx: 9 },
];

const chestCard = [
  { name: "chest card selection" },
  {
    name: "You organize a bake sale for your local school. Collect $25.",
    payment: 25,
    idx: 1,
  },
  { name: "Everyone donate 10% cash to you!", payment: 0.1, idx: 2 },
  {
    name: "Grand Opera Opening! Collect $50 from each player",
    payment: 50,
    idx: 3,
  },
  { name: "Go to Raffles", payment: 0, idx: 4, position: 1 },
  { name: "Life insurance matures. Collect $100", payment: 100, idx: 5 },
  { name: "Pay fine $10", payment: 10, idx: 6 },
  { name: "Pay school tax of $150", payment: 150, idx: 7 },
  { name: "Pay your insurance premium $50", payment: 50, idx: 8 },
  { name: "Won 2nd prize in beauty contest! Collect $11", payment: 11, idx: 9 },
];

// const win3property = [
//   [a1, a3],
//   [a6, a8, a9],
//   [a11, a13, a14],
//   [a16, a18],
//   [a20, a22, a23],
//   [a25, a26, a28],
//   [a30, a31, a33],
//   [a36, a37],
// ];

const comment = document.querySelector(".comment");
const playBtn = document.querySelector(".playBtn");
const roll = document.querySelector(".roll");
const fineBtn = document.querySelector(".fineBtn");
const passBtn = document.querySelector(".passBtn");

//game starts
function updatePlayerStats() {}

function play() {
  if (!isGameRunning) {
    console.log(`game starts`);
    isGameRunning = true;
    playBtn.remove();
    a0.appendChild(playerA, playerB);

    //playerPos = 0;

    playerA.innerHTML = `<img class="playerA" src="images/m.png" alt="player piece" />`;
    playerB.innerHTML = `<img class="playerB" src="images/pikachu.png" alt="player piece" />`;

    playerAStat.innerText = `Bank: $${playerData[playerTurn].bank} Property: ${playerData[playerTurn].Deed}`;

    playerBStat.innerText = `Bank: $${playerData[playerTurn].bank} Property: ${playerData[playerTurn].Deed}`;

    console.log(`${playerData[playerTurn].name} starts first`);
  }
}

function checkPlayerTurn() {
  if (playerTurn === 0) {
    console.log("it is player B turn");
    playerTurn += 1;
    opponent -= 1;
    comment.innerText = "";
  } else if (playerTurn === 1) {
    console.log("it is player A turn");
    playerTurn -= 1;
    opponent += 1;
    comment.innerText = "";
  }
}

//Roll Dice Function
let dice1 = 0;
let dice2 = 0;
function rollDice() {
  //Generate Random Dice
  checkPlayerTurn();
  //const diceRoll = 1;
  dice1 = Math.floor(Math.random() * 6 + 1);
  dice2 = Math.floor(Math.random() * 6 + 1);
  console.log("Dice rolled", dice1, dice2);
}

function movePlayers() {
  if (playerData[playerTurn].convicted) {
    console.log("you are still convicted");
  } else if (!playerData[playerTurn].convicted) {
    playerPos = playerData[playerTurn].position + dice1 + dice2;
    if (playerPos > tilesData.length - 1) {
      playerPos -= tilesData.length;
      console.log("Pass Go");
      comment.innerText = "You pass Go! Collect $200";
      playerData[playerTurn].bank += 200;
      playerData[
        playerTurn
      ].startingStats.innerText = `Bank: $${playerData[playerTurn].bank} Property: ${playerData[playerTurn].Deed}`;
    }

    tilesData[playerPos].tile.appendChild(playerData[playerTurn].name);
    playerData[playerTurn].position = playerPos;
    //goJail();

    console.log(playerData[playerTurn]);
    console.log(tilesData[playerPos]);
  }
}

// player will get to buy property
function buyProperty() {
  if (
    tilesData[playerPos].deed === true &&
    playerData[playerTurn].bank >= tilesData[playerPos].price
  ) {
    console.log("this should only appear when property is empty");
    comment.innerText = `You have purchased this property! $${tilesData[playerPos].price} deducted!`;
    console.log("this property is available");
    tilesData[playerPos].tile.style.backgroundColor =
      playerData[playerTurn].color;
    tilesData[playerPos].color = playerData[playerTurn].color;
    tilesData[playerPos].deed = "taken";
    tilesData[playerPos].ownBy = playerData[playerTurn].name;
    console.log("check if own by is updated", tilesData[playerPos]);
    console.log(playerData[playerTurn]);
    console.log(tilesData[playerPos].deed);
    //setTimeout(clearText, 1500);
    playerData[playerTurn].Deed++;
    playerData[playerTurn].bank -= tilesData[playerPos].price;
    tilesData[playerPos].price = 0;

    playerData[
      playerTurn
    ].startingStats.innerText = `Bank: $${playerData[playerTurn].bank} Property: ${playerData[playerTurn].Deed}`;
  } else if (
    tilesData[playerPos].deed === true &&
    playerData[playerTurn].bank < tilesData[playerPos].price
  ) {
    comment.innerText = "You do not have enough purchase this property";
    //setTimeout(clearText, 1500);
  }
}

function checkIfReadyToRent() {
  if (tilesData[playerPos].deed === "taken") {
    console.log("this is checking if property is taken");
    tilesData[playerPos].deed = "ready to rent";
  } else if (playerData[playerTurn].bank < tilesData[playerPos].rent) {
    comment.innerText = "You do not have enough to pay rent";
    //setTimeout(clearText, 1500);
  } else if (
    tilesData[playerPos].deed === "ready to rent" &&
    playerData[playerTurn].name !== tilesData[playerPos].ownBy
  ) {
    payRent();
  }
}

function payRent() {
  console.log("pay rent");
  playerData[playerTurn].bank -= tilesData[playerPos].rent;
  playerData[opponent].bank += tilesData[playerPos].rent;
  playerAStat.innerText = `Bank: $${playerData[0].bank} Property: ${playerData[0].Deed}`;
  playerBStat.innerText = `Bank: $${playerData[1].bank} Property: ${playerData[1].Deed}`;
  comment.innerText = `You have paid rent. $${tilesData[playerPos].rent} deducted!`;
  //setTimeout(clearText, 1500);
  console.log("rent deducted");
}

function clearText() {
  comment.innerText = "";
}
function sentToJail() {
  a29.appendChild(playerData[playerTurn].name);
}
// function goJail() {
//   if (
//     tilesData[playerPos].deed === "jailTime" &&
//     playerData[playerTurn].position === tilesData[playerPos].position
//   ) {
//     console.log("you are going to jail");
//     comment.innerText = "You are going to jail";
//     setTimeout(sentToJail, 1000);
//     setTimeout(clearText, 1500);

//     playerData[playerTurn].convicted = true;
//     playerData[playerTurn].jailTerm = 4;
//     playerData[playerTurn].position = 29;
//   }
// }

// function fine() {
//   if (playerData[opponent].bank >= 50) {
//     playerData[opponent].bank -= 50;
//   } else {
//     comment.innerText = "You do not have enough cash, you have to pass";
//   }
// }

//check if player is convicted
// function checkJailTerm() {
//   if (playerData[playerTurn].jailTerm > 0 && dice1 !== dice2) {
//     playerData[playerTurn].jailTerm--;

//     comment.innerText = "Jail time";
//     setInterval(clearText, 1000);
//     //rollDice();
//   } else if (playerData[playerTurn].jailTerm > 0 && dice1 === dice2) {
//     comment.innerText = "You are free to go";
//     setInterval(clearText, 1000);
//     // movePlayers();
//     playerData[playerTurn].convicted = false;
//     playerData[playerTurn].jailTerm = 0;
//     playerPos = playerData[playerTurn].position + dice1 + dice2;
//     if (playerPos > tilesData.length - 1) {
//       playerPos -= tilesData.length;
//       console.log("Pass Go");
//     }

//     tilesData[playerPos].tile.appendChild(playerData[playerTurn].name);
//     playerData[playerTurn].position = playerPos;

//     //fineBtn.style.backgroundColor = "red";
//     //fineBtn.style.font = "white";
//     //fineBtn.innerText = "Pay Fine";
//   } else if (playerData[playerTurn].jailTerm === 0) {
//     playerData[playerTurn].convicted = false;
//     comment.innerText = "You are free to go";
//     setInterval(clearText, 1000);

//     playerPos = playerData[playerTurn].position + dice1 + dice2;
//     if (playerPos > tilesData.length - 1) {
//       playerPos -= tilesData.length;
//       console.log("Pass Go");
//     }

//     tilesData[playerPos].tile.appendChild(playerData[playerTurn].name);
//     playerData[playerTurn].position = playerPos;
//   }
// }

//check number of check and end game
const restartBtn = document.createElement("button");

function turnCheck() {
  turn++;
  if (turn >= 200) {
    console.log("Game ends");
    restartBtn.innerText = "Restart";
    restartBtn.classList.add("restartBtn");
    comment.innerText = "";
    comment.innerText = "Game end";
    board.appendChild(restartBtn);
    roll.remove();
    isGameRunning = false;
  }
}

function passGo() {}

function drawChance() {
  if (
    tilesData[playerPos].deed === "Draw Chance" &&
    playerData[playerTurn].position === tilesData[playerPos].position
  ) {
    console.log("draw chance");
    const shuffle = Math.floor(Math.random() * 9 + 1);
    console.log(shuffle);
    if (shuffle === chanceCards[shuffle].idx) {
      playerData[playerTurn].bank += chanceCards[shuffle].payment;
      playerData[
        playerTurn
      ].startingStats.innerText = `Bank: $${playerData[playerTurn].bank} Property: ${playerData[playerTurn].Deed}`;
      comment.innerText = `You drew chance card! ${chanceCards[shuffle].name}, $${chanceCards[shuffle].payment} was credited to your bank`;
      //setTimeout(clearText, 1000);
      console.log("drew chance", chanceCards);
    }
  }
}

function drawChest() {
  if (
    tilesData[playerPos].deed === "Draw Chest" &&
    playerData[playerTurn].position === tilesData[playerPos].position
  ) {
    console.log("draw chance");
    const shuffle = Math.floor(Math.random() * 9 + 1);
    console.log(shuffle);
    if (shuffle === 2) {
      playerData[playerTurn].bank *= chestCard[shuffle].payment;
      playerData[opponent].bank *= 0.9;
      playerData[
        playerTurn
      ].startingStats.innerText = `Bank: $${playerData[playerTurn].bank} Property: ${playerData[playerTurn].Deed}`;
      playerData[
        opponent
      ].startingStats.innerText = `Bank: $${playerData[opponent].bank} Property: ${playerData[opponent].Deed}`;
      comment.innerText = `You drew chest card! ${chestCard[shuffle].name}`;
      console.log("drew 10% donation");
    } else if (shuffle === 4) {
      a1.appendChild(playerData[playerTurn].name);
      playerData[playerTurn].position = 1;
      comment.innerText = `You drew chest card! ${chestCard[shuffle].name}. Pass Go! Collect $200`;
      playerData[playerTurn].bank += 200;
      playerData[
        playerTurn
      ].startingStats.innerText = `Bank: $${playerData[playerTurn].bank} Property: ${playerData[playerTurn].Deed}`;
    } else if (shuffle === chanceCards[shuffle].idx) {
      playerData[playerTurn].bank += chestCard[shuffle].payment;
      playerData[
        playerTurn
      ].startingStats.innerText = `Bank: $${playerData[playerTurn].bank} Property: ${playerData[playerTurn].Deed}`;
      comment.innerText = `You drew chest card! ${chestCard[shuffle].name},
      `;
      //setTimeout(clearText, 1000);
      console.log("drew chance", chestCard);
    }
  }
}

function restartGame() {
  if (!isGameRunning) {
    location.reload();
  }
}

playBtn.addEventListener("click", () => {
  play();
});

fineBtn.addEventListener("click", () => fine());

//roll.addEventListener("click", () => checkPlayerTurn());

roll.addEventListener("click", () => rollDice());
roll.addEventListener("click", () => movePlayers());
//roll.addEventListener("click", () => checkJailTerm());
roll.addEventListener("click", () => drawChance());
roll.addEventListener("click", () => drawChest());

//roll.addEventListener("click", () => goJail());
roll.addEventListener("click", () => buyProperty());
roll.addEventListener("click", () => turnCheck());
roll.addEventListener("click", () => checkIfReadyToRent());

restartBtn.addEventListener("click", () => restartGame());
