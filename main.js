let player1Move = true;
let player2Move = false;

let board = [false, false, false, false, false, false, false, false, false];
console.log(board);

function changeColor(colorChoice) {
  document.getElementById("bot-name").style.color = colorChoice;
}

function setIconX(id, icon) {
  if (player1Move) {
    document.getElementById(id).src = "./images/x.svg";
    document.getElementById(id).style.width = "150px";
    player1Move = false;
    player2Move = true;
    console.log(player1Move);
    console.log(player2Move);

    identifyPosition(id);

  } else if (player2Move) {
    document.getElementById(id).src = "./images/o.svg";
    document.getElementById(id).style.width = "125px";
    player1Move = true;
    player2Move = false;

    identifyPosition(id);
  }
}

function identifyPosition(id) {
    if (id == "p0-icon") {
      board[0] = true;
    } else if (id == "p1-icon") {
      board[1] = true;
    } else if (id == "p2-icon") {
      board[2] = true;
    } else if (id == "p3-icon") {
      board[3] = true;
    } else if (id == "p4-icon") {
      board[4] = true;
    } else if (id == "p5-icon") {
      board[5] = true;
    } else if (id == "p6-icon") {
      board[6] = true;
    } else if (id == "p7-icon") {
      board[7] = true;
    } else if (id == "p8-icon") {
      board[8] = true;
    }

    console.log(board);
}