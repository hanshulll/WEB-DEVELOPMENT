/*----- constants -----*/
const colors = {
    '1' : "#ffc2e2", //pink
    '-1' : "black", //black
    '0' : "#f7fcff" //white
}

const TOTALTURNS = 42;

/*----- app's state (variables) -----*/
let testVar = 1;
let board;
let turnsTaken = 0;
let playerTurn; // 1, -1
let winner; // null, 1, -1, "T"
let winc1 = 0; //pink win count
let winc2 = 0; //black win count

/*----- cached element references -----*/
const choiceEl = [...document.querySelectorAll("#choiceButtons > div")];
const replayEl = document.getElementById("replay");
const headerEl = document.getElementById("header");
const pinkEl = document.querySelector(".pink");
const blackEl = document.querySelector(".black");
const audio = document.getElementById('clack');
audio.volume = 0.5;
const winnerSound = document.getElementById("winner");

/*----- event listeners -----*/
document.getElementById("choiceButtons").addEventListener("click", handleMove);
document.getElementById("replay").addEventListener("click", init);

// /*----- functions -----*/
init();
function init() {
  
  //rng to find 1st player 
  const randomIdx = Math.floor(Math.random() * 2);
  if (randomIdx === 0) {
    playerTurn = 1
  } else {
    playerTurn = -1
  }

  winnerSound.pause();
  headerEl.classList.remove("glow");
  turnsTaken = 0;
  winner = null;
  board = [
    [0, 0, 0, 0, 0, 0], // Column 0
    [0, 0, 0, 0, 0, 0], // Column 1
    [0, 0, 0, 0, 0, 0], // Column 2
    [0, 0, 0, 0, 0, 0], // Column 3
    [0, 0, 0, 0, 0, 0], // Column 4
    [0, 0, 0, 0, 0, 0], // Column 5
    [0, 0, 0, 0, 0, 0], // Column 6
  ];
  render();
}

function render() {
  // itterate over each column in  board
  board.forEach((column, columnidx) => {
    // itterate over each cell in column
    column.forEach((cell, cellidx) => {
      // find specific cell using columnidx and cellidx
      let div = document.getElementById(`c${columnidx}r${cellidx}`);
      div.style.backgroundColor = colors[cell];
    });
    //if column full make button invisible
    choiceEl[columnidx].style.visibility = column.includes(0) ? "visible" : "hidden";
  });

  //render header message 
  if (winner === 'T') {
    header.innerText = "It's a Tie!!!";
  } else if (winner) {
    winnerSound.play();
    replayEl.innerText = "Play Again";
    headerEl.classList.add("glow");
    if (winner === 1) {
      ++winc1;
      headerEl.innerText = `Winner Winner, Chicken Dinner: Pink`;
      pinkEl.innerText = `${winc1}`;
    } else if (winner === -1) {
      ++winc2;
      headerEl.innerText = `Winner Winner, Chicken Dinner: Black`;
      blackEl.innerText = `${winc2}`;
    } 
  } else {
    headerEl.innerHTML = `Player ${playerTurn === 1 ? 'PINK' : 'BLACK'}'s turn!`;
    replayEl.innerText = "Restart Game";
  }
}

function handleMove(evt) {
  // update all impacted state
  const colIdx = choiceEl.indexOf(evt.target);

  if (colIdx === -1 || winner) return;
  const colArr = board[colIdx];
  const rowIdx = colArr.indexOf(0);
  if (rowIdx === -1) return;

  colArr[rowIdx] = playerTurn;
  turnsTaken++;
  playerTurn = playerTurn * -1;

  winner = getWinner(colIdx, rowIdx);
  render();
  audio.play();
}

//Win logic
function getWinner() {
  //check for tie
  if (turnsTaken === 42) return winner = "T";

  //check every collumn for a winner, if so return the winner
  for (let colIdx = 0; colIdx <= 6; colIdx++) {
    winner = checkCol(colIdx);
    if (winner) break;
  }
  return winner;
}

//check Col at it's index within the board 2d array
function checkCol(colIdx) {
  const colArr = board[colIdx];
  // for every row in the col: check for winner and set var winner = winning color's number value
  for (let rowIdx = 0; rowIdx < colArr.length; rowIdx++) {
    let winner = checkVert(colArr, rowIdx) || checkHori(colIdx, rowIdx) ||
      checkDiag(colIdx, rowIdx, 1) || checkDiag(colIdx, rowIdx, -1);
    if (winner) return winner;
  }
  return null;
}

function checkDiag(colIdx, rowIdx, dir) {
  // Boundary check
  if (dir > 0 && colIdx > 3 || dir > 0 && rowIdx > 2) return null;
  if (dir < 0 && colIdx > 3 || dir < 0 && rowIdx < 3) return null;

  if (Math.abs(board[colIdx][rowIdx] + board[colIdx + 1][rowIdx + dir] +
      board[colIdx + 2][rowIdx + dir * 2] + board[colIdx + 3][rowIdx + dir * 3]) === 4) {
    return board[colIdx][rowIdx];
  } else {
    return null;
  }
}

function checkHori(colIdx, rowIdx) {
  // Boundary check
  if (colIdx > 3) return null;

  //add the value of all spaces to the right of colIdx and look for +4 or -4
  //then return the value of +4 using Math.abs to get a winner
  if (Math.abs(board[colIdx][rowIdx] + board[colIdx + 1][rowIdx] +
      board[colIdx + 2][rowIdx] + board[colIdx + 3][rowIdx]) === 4) {
    return board[colIdx][rowIdx];
  } else {
    return null;
  }
}

function checkVert(colArr, rowIdx) {
  // Boundary check
  if (rowIdx > 2) return null;

  //add the value of all spaces above row indx and look for +4 or -4
  //then return the value of +4 using Math.abs to get a winner
  if (Math.abs(colArr[rowIdx] + colArr[rowIdx + 1] + colArr[rowIdx + 2] + colArr[rowIdx + 3]) === 4) {
    return colArr[rowIdx];
  } else {
    return null;
  }
}