var origBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let boardIDs = [
  "p0-icon",
  "p1-icon",
  "p2-icon",
  "p3-icon",
  "p4-icon",
  "p5-icon",
  "p6-icon",
  "p7-icon",
  "p8-icon",
];

// Handles the action when move is made
function runMoves(id, icon) {
  playerMove(id, icon);
  if(checkWin("O")) {
    console.log("HUman Win")
    resetBoard();
  } else if(isTie()) {
    console.log("HUMAN TIE");
    resetBoard();
  }
  aiMove();
  if (checkWin("X")) {
    console.log("Ai  Win");
    resetBoard();
  } else if (isTie()) {
    console.log("AI TIE");
    resetBoard();
  }
}

// Function for when player move
function aiMove() {
  // For computer move
  // finding the ultimate play on the game that favors the computer
  var bestSpot = minimax(origBoard, aiPlayer);

  //loging the results
  var bestSpot = bestSpot.index;
  console.log("index best spot: " + bestSpot);
  console.log("function calls: " + fc);
  origBoard[bestSpot] = "X";
  console.log(origBoard);

  // Identify tile ID and set its icon
  let tileId = boardIDs[bestSpot];
  seTileIcon(tileId, "x");  
  console.log(tileId);
}

// Function for when player move
function playerMove(id, icon) {
  seTileIcon(id, "o");  
  markBoard(id, "O");
}

// Set tile icon image
function seTileIcon(id, iconFileName) {
  document.getElementById(id).src = "./images/" + iconFileName + ".svg";
  document.getElementById(id).style.width = "150px";
}

// Marks the board and updates it for every move
function markBoard(id, icon) {
  if (id == "p0-icon") {
    origBoard[0] = icon;
  } else if (id == "p1-icon") {
    origBoard[1] = icon;
  } else if (id == "p2-icon") {
    origBoard[2] = icon;
  } else if (id == "p3-icon") {
    origBoard[3] = icon;
  } else if (id == "p4-icon") {
    origBoard[4] = icon;
  } else if (id == "p5-icon") {
    origBoard[5] = icon;
  } else if (id == "p6-icon") {
    origBoard[6] = icon;
  } else if (id == "p7-icon") {
    origBoard[7] = icon;
  } else if (id == "p8-icon") {
    origBoard[8] = icon;
  }

  console.log(origBoard);
}

// Checks if there is a winner
function checkWin(icon) {
  if (origBoard[0] == icon && origBoard[1] == icon && origBoard[2] == icon) {
    return true;
  } else if (
    origBoard[0] == icon &&
    origBoard[3] == icon &&
    origBoard[6] == icon
  ) {
    return true;
  } else if (
    origBoard[0] == icon &&
    origBoard[4] == icon &&
    origBoard[8] == icon
  ) {
    return true;
  } else if (
    origBoard[1] == icon &&
    origBoard[4] == icon &&
    origBoard[7] == icon
  ) {
    return true;
  } else if (
    origBoard[2] == icon &&
    origBoard[4] == icon &&
    origBoard[6] == icon
  ) {
    return true;
  } else if (
    origBoard[2] == icon &&
    origBoard[5] == icon &&
    origBoard[8] == icon
  ) {
    return true;
  } else if (
    origBoard[3] == icon &&
    origBoard[4] == icon &&
    origBoard[5] == icon
  ) {
    return true;
  } else if (
    origBoard[6] == icon &&
    origBoard[7] == icon &&
    origBoard[8] == icon
  ) {
    return true;
  }
}

// Resets the array board and clear the icons
function resetBoard() {
  origBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  console.log(origBoard);

  for (let i = 0; i < boardIDs.length; i++) {
    document.getElementById(boardIDs[i]).src = ".";
  }
}

// Function that checks if there is a tie
function isTie() {
  for (let i = 0; i < origBoard.length; i++) {
    if (origBoard[i] >= 0 && origBoard[i]  <= 8) {
      return false;
    }
  } 
  return true;
}