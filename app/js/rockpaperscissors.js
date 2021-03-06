////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
//'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
        return move || getInput();
}

function getComputerMove(move) {
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove === computerMove) {
        winner = "tie";
    } else if (playerMove === "rock" && computerMove === "scissors") {
        winner = "player";
    } else if (playerMove === "scissors" && computerMove === "paper") {
        winner = "player";
    } else if (playerMove === "paper" && computerMove === "rock") {
        winner = "player";
    } else {
        winner = "computer";
    }
    return winner;
}

function playTo(roundNum) {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0; 
    while((roundNum !== playerWins) && (roundNum !== computerWins)) {
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
        var roundWinner = getWinner(playerMove, computerMove);
        if(roundWinner === "player") {
            playerWins++;
        } else if (roundWinner === "computer") {
            computerWins++;
        } else {
            console.log("a tie!");
        }
        console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');      
    }
    if(playerWins > computerWins) {
        console.log("Player win!");
    } else {
        console.log("Awwww.. the Computer win");
    }
    return console.log("With a score of " + [playerWins, computerWins]);
    
}
var numOfPlay = 2;
playTo(numOfPlay);