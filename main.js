let player1Move = true;
let player2Move = false;

let boardBool = [false, false, false, false, false, false, false, false, false];
let boardIcon = ["", "", "", "", "", "", "", "", ""];

console.log(boardBool);
console.log(boardIcon);

function changeColor(colorChoice) {
  document.getElementById("bot-name").style.color = colorChoice;
}

// Check if there is a tie
function isTie() {
  for (let i = 0; i < boardBool.length; i++) {
    if (boardBool[i] == false) {
      return false;
    }
  }
  return true;
}

function setIconX(id, icon) {
  if (player1Move) {
    document.getElementById(id).src = "./images/x.svg";
    document.getElementById(id).style.width = "150px";
    markBoard(id);
    if (checkWin("x")) {
      console.log("Player X Wins!");
    }
    if(isTie()) {
        console.log("tie");
    }

    player1Move = false;
    player2Move = true;
  } else if (player2Move) {
    document.getElementById(id).src = "./images/o.svg";
    document.getElementById(id).style.width = "125px";
    markBoard(id);
    if (checkWin("o")) {
      console.log("Player O Wins!");
    }
    if (isTie()) {
      console.log("tie");
    }

    player1Move = true;
    player2Move = false;
  }
}

function markBoard(id) {
  if (id == "p0-icon") {
    boardBool[0] = true;
    if (player1Move) {
      boardIcon[0] = "x";
    } else if (player2Move) {
      boardIcon[0] = "o";
    }
  } else if (id == "p1-icon") {
    boardBool[1] = true;
    if (player1Move) {
      boardIcon[1] = "x";
    } else if (player2Move) {
      boardIcon[1] = "o";
    }
  } else if (id == "p2-icon") {
    boardBool[2] = true;
    if (player1Move) {
      boardIcon[2] = "x";
    } else if (player2Move) {
      boardIcon[2] = "o";
    }
  } else if (id == "p3-icon") {
    boardBool[3] = true;
    if (player1Move) {
      boardIcon[3] = "x";
    } else if (player2Move) {
      boardIcon[3] = "o";
    }
  } else if (id == "p4-icon") {
    boardBool[4] = true;
    if (player1Move) {
      boardIcon[4] = "x";
    } else if (player2Move) {
      boardIcon[4] = "o";
    }
  } else if (id == "p5-icon") {
    boardBool[5] = true;
    if (player1Move) {
      boardIcon[5] = "x";
    } else if (player2Move) {
      boardIcon[5] = "o";
    }
  } else if (id == "p6-icon") {
    boardBool[6] = true;
    if (player1Move) {
      boardIcon[6] = "x";
    } else if (player2Move) {
      boardIcon[6] = "o";
    }
  } else if (id == "p7-icon") {
    boardBool[7] = true;
    if (player1Move) {
      boardIcon[7] = "x";
    } else if (player2Move) {
      boardIcon[7] = "o";
    }
  } else if (id == "p8-icon") {
    boardBool[8] = true;
    if (player1Move) {
      boardIcon[8] = "x";
    } else if (player2Move) {
      boardIcon[8] = "o";
    }
  }

  console.log(boardBool);
  console.log(boardIcon);
}

function checkWin(icon) {
  if (boardIcon[0] == icon && boardIcon[1] == icon && boardIcon[2] == icon) {
    return true;
  } else if (
    boardIcon[0] == icon &&
    boardIcon[3] == icon &&
    boardIcon[6] == icon
  ) {
    return true;
  } else if (
    boardIcon[0] == icon &&
    boardIcon[4] == icon &&
    boardIcon[8] == icon
  ) {
    return true;
  } else if (
    boardIcon[1] == icon &&
    boardIcon[4] == icon &&
    boardIcon[7] == icon
  ) {
    return true;
  } else if (
    boardIcon[2] == icon &&
    boardIcon[4] == icon &&
    boardIcon[6] == icon
  ) {
    return true;
  } else if (
    boardIcon[2] == icon &&
    boardIcon[5] == icon &&
    boardIcon[8] == icon
  ) {
    return true;
  } else if (
    boardIcon[3] == icon &&
    boardIcon[4] == icon &&
    boardIcon[5] == icon
  ) {
    return true;
  } else if (
    boardIcon[6] == icon &&
    boardIcon[7] == icon &&
    boardIcon[8] == icon
  ) {
    return true;
  }
}
