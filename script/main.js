'use strict';

//global veriables
var enter = '<br>';
var rock = document.getElementById('rock');
var paper = document.getElementById('paper');
var scissors = document.getElementById('scissors');
var output = document.getElementById('output');
var round = document.getElementById('result');
var state = {
    countRound: 0,
    playerScore: 0,
    computerScore: 0
};
var btn = document.getElementById('btn');
var award = document.getElementById('first');

btn.addEventListener('click', function () {

    state.countRound = window.prompt('Podaj ilość rund');
    if (isNaN(state.countRound)) {
        alert('Podana wartość nie jest liczbą!');
    } else if (state.countRound == null) {
        alert('Nie podano żadnej wartości!');
    } else {
        state.playerScore = 0;
        state.computerScore = 0;
        rock.disabled = false;
        paper.disabled = false;
        scissors.disabled = false;
    }
});


function log(text) {
    output.innerHTML = enter + text + output.innerHTML;
}

rock.addEventListener('click', function () {
    playerMove('rock');
});

paper.addEventListener('click', function () {
    playerMove('paper');
});

scissors.addEventListener('click', function () {
    playerMove('scissors');
});

//generate random Number
function generateComputerMove() {
    var computerChoise = ['rock', 'paper', 'scissors'];
    var computerMove = Math.floor(Math.random() * 3);
    return computerChoise[computerMove];
}

function playerMove(playerChoice) {

    var computerMove = generateComputerMove();

    //console.log(playerChoice);

    if (playerChoice === computerMove) {
        log('Tie');
    } else if ((playerChoice === 'paper' && computerMove === 'rock') || (playerChoice === 'rock' && computerMove === 'scissors') || (playerChoice === 'scissors' && computerMove === 'paper')) {
        state.playerScore++;
        log('You won the round! ' + state.playerScore + ' - ' + state.computerScore);
    } else {
        state.computerScore++;
        log('You lost the round! ' + state.playerScore + ' - ' + state.computerScore);
    }

    if (state.playerScore == state.countRound) {
        award.classList.add('special');
        log('YOU WON THE ENTIRE GAME!!! ' + state.playerScore + ' - ' + state.computerScore);
        paper.disabled = true;
        rock.disabled = true;
        scissors.disabled = true;
    } else if (state.computerScore == state.countRound) {
        award.classList.toggle('special');
        log('GAME OVER! ');
        paper.disabled = true;
        rock.disabled = true;
        scissors.disabled = true;
    }
}
