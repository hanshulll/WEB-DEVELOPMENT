let userScore = 0;
let compScore = 0;

const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score');
const scoreboard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');


function getCompChoice(){
    const choices = ["r", "p", "s"];
    return choices[Math.floor(Math.random()*3)];
}

function convertToWord(letter){
    if(letter === "r")
        return "Rock";
    if(letter === "p")
        return "Paper";
    if(letter === "s")
        return "Scissors";
}

function win(userChoice, compChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    const userSub = "user".fontsize(3).sub();
    const compSub = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)+userSub} beats ${convertToWord(compChoice)+compSub}. You win!!`;
    document.getElementById(userChoice).classList.add('win');
    setTimeout(() => {
        document.getElementById(userChoice).classList.remove('win');
    }, 500);
}

function lose(userChoice, compChoice){
    compScore++;
    compScore_span.innerHTML = compScore;
    const userSub = "user".fontsize(3).sub();
    const compSub = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)+userSub} losses to ${convertToWord(compChoice)+compSub}. You lost!!`;
    document.getElementById(userChoice).classList.add('lose');
    setTimeout(() => {
        document.getElementById(userChoice).classList.remove('lose');
    }, 500);
}

function draw(userChoice, compChoice){
    const userSub = "user".fontsize(3).sub();
    const compSub = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)+userSub} and ${convertToWord(compChoice)+compSub}. It's a draw!!`;    
    document.getElementById(userChoice).classList.add('draw');
    setTimeout(() => {
        document.getElementById(userChoice).classList.remove('draw');
    }, 500);
}

function game(userChoice){
    const compChoice = getCompChoice();
    switch(userChoice+compChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, compChoice);
            break;
        
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, compChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, compChoice);
            break;
    }
}


rock_div.addEventListener('click', function(){
    game("r");
});

paper_div.addEventListener('click', function(){
    game("p");
});

scissors_div.addEventListener('click', function(){
    game("s");
});

