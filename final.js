// var origBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8];

let playerMove = true; // Player = O
let aiMove = false; // Player = X
let playerScore = 0;
let aiScore = 0;
let winningCombination = [];
let winningComboID = [];

console.log("Initial board: " + origBoard);

function tileClick(id) {
  // End game if player wins
  playerAction(id);
  if (checkWinner("O")) {
    console.log("Humannn wins");
    playerScore++;
    updateScore(playerScore, "player-score");
    setWinningComboID();
    console.log("Winning combination: " + winningCombination)
    console.log("Winning combination ID: " + winningComboID);
    return;
  } else if (checkTie()) {
    console.log("ITS ATAAAY");
    return;
  }

  // End game if AI wins
  aiAction();
  if (checkWinner("X")) {
    console.log("AI WINS!");
    aiScore++;
    updateScore(aiScore, "bot-score");
;
    return;
  } else if (checkTie()) {
    console.log("ITS ATAAAY");
    return;
  }
}

function playerAction(id) {
  setIconO(id);
  var indexByPlayer = tileIndex(id);
  origBoard[indexByPlayer] = "O";
  console.log("Index by player: " + indexByPlayer);
  console.log("Board after player move: " + origBoard);
  playerMove = false;
  aiMove = true;
}

function aiAction() {
  var indexByAI = minimax(origBoard, aiPlayer).index;
  console.log("Index by AI: " + indexByAI);
  var id = tileID(indexByAI);
  setIconX(id);
  origBoard[indexByAI] = "X";
  console.log("Tile ID by AI: " + id);
  console.log("Board after AI move: " + origBoard);
  aiMove = false;
  playerMove = true;
  console.log("End of line by ai action");
}

function setIconX(id) {
  document.getElementById(id).src = "./images/x.svg";
  document.getElementById(id).style.width = "150px";
}

function setIconO(id) {
  document.getElementById(id).src = "./images/o.svg";
  document.getElementById(id).style.width = "130px";
}

// Returns an index that maches the board depending on the tile selected by player
function tileIndex(id) {
  if (id == "p0-icon") {
    return 0;
  } else if (id == "p1-icon") {
    return 1;
  } else if (id == "p2-icon") {
    return 2;
  } else if (id == "p3-icon") {
    return 3;
  } else if (id == "p4-icon") {
    return 4;
  } else if (id == "p5-icon") {
    return 5;
  } else if (id == "p6-icon") {
    return 6;
  } else if (id == "p7-icon") {
    return 7;
  } else if (id == "p8-icon") {
    return 8;
  }
}

// Returns the id that maches the tile IDS depending on the index by the board
function tileID(index) {
  if (index == 0) {
    return "p0-icon";
  } else if (index == 1) {
    return "p1-icon";
  } else if (index == 2) {
    return "p2-icon";
  } else if (index == 3) {
    return "p3-icon";
  } else if (index == 4) {
    return "p4-icon";
  } else if (index == 5) {
    return "p5-icon";
  } else if (index == 6) {
    return "p6-icon";
  } else if (index == 7) {
    return "p7-icon";
  } else if (index == 8) {
    return "p8-icon";
  }
}

function checkWinner(icon) {
  if (origBoard[0] == icon && origBoard[1] == icon && origBoard[2] == icon) {
    winningCombination = [0, 1, 2];
    return true;
  } else if (
    origBoard[0] == icon &&
    origBoard[3] == icon &&
    origBoard[6] == icon
  ) {
    winningCombination = [0, 3, 6];
    return true;
  } else if (
    origBoard[0] == icon &&
    origBoard[4] == icon &&
    origBoard[8] == icon
  ) {
    winningCombination = [0, 4, 8];
    return true;
  } else if (
    origBoard[1] == icon &&
    origBoard[4] == icon &&
    origBoard[7] == icon
  ) {
    winningCombination = [1, 4, 7];
    return true;
  } else if (
    origBoard[2] == icon &&
    origBoard[4] == icon &&
    origBoard[6] == icon
  ) {
    winningCombination = [2, 4, 6];
    return true;
  } else if (
    origBoard[2] == icon &&
    origBoard[5] == icon &&
    origBoard[8] == icon
  ) {
    winningCombination = [2, 5, 8];
    return true;
  } else if (
    origBoard[3] == icon &&
    origBoard[4] == icon &&
    origBoard[5] == icon
  ) {
    winningCombination = [3, 4, 5];
    return true;
  } else if (
    origBoard[6] == icon &&
    origBoard[7] == icon &&
    origBoard[8] == icon
  ) {
    winningCombination = [6, 7, 8];
    return true;
  } else {
    gameWin = false;
  }
}

function checkTie() {
  for (let i = 0; i < origBoard.length; i++) {
    if (origBoard[i] > -1) {
      return false;
    }
  }
  return true;
}

function updateScore(newValue, targetID) {
  var element = document.getElementById(targetID);
  element.innerText = newValue;
}

function setWinningComboID() {
  for(var i = 0; i < winningCombination.length; i++) {
    winningCombination.push(tileID(winningCombination[i]));
  }
}