'use strict';

// Naming all Classes
const msg = document.querySelector('.message');
const sco = document.querySelector('.score');
const highsco = document.querySelector('.highscore');
const num = document.querySelector('.number');
const body = document.querySelector('body');
const gues = document.querySelector('.guess');
const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');

// All Functions
const setSecretNumber = function () {
    return Math.trunc(Math.random() * 20) + 1;
}

const displayMessage = function (message) {
    msg.textContent = message;
}

const displayScore = function (score) {
    sco.textContent = score;
}

const displayHighScore = function (highscore) {
    highsco.textContent = highscore;
}

const displaySecretNumber = function (secretnumber, numberwidth) {
    num.textContent = secretnumber;
    num.style.width = numberwidth;
}

const changeBackground = function (backgroundcolor) {
    body.style.backgroundColor = backgroundcolor;
}

// Assigning values
let secretNumber = setSecretNumber();
let score = 20;
let highScore = 0;

// Main Program
checkBtn.addEventListener('click', function () {
    const guess = Number(gues.value);

    // When there is no input
    if (!guess) {
        displayMessage('⛔ No Number!');

        // When player wins
    } else if (guess === secretNumber) {
        displayMessage('Correct Number 🎉');
        displaySecretNumber(secretNumber, '30rem');
        changeBackground('#60b347');
        gues.setAttribute('disabled', '');
        checkBtn.setAttribute('disabled','');
        checkBtn.style.cursor = 'not-allowed';

        // Setting highscore
        if (score > highScore) {
            highScore = score;
            displayHighScore(highScore);
        }
        // When guess is wrong
    } else if (guess !== secretNumber) {

        // Guess is High
        if (score > 1) {
            displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
            score--;

            // Guess is Low
        } else {
            displayMessage('💥 You lost the game!');
            score--;
        }
    }
    displayScore(score);
});


againBtn.addEventListener('click', function () {
    // Reseting to initial state
    score = 20;
    secretNumber = setSecretNumber();
    displayMessage('Start guessing...');
    gues.value = '';
    changeBackground('#222');
    displayScore(score);
    displaySecretNumber('?', '15rem');
    gues.removeAttribute('disabled');
    checkBtn.removeAttribute('disabled');
    checkBtn.style.cursor = 'pointer';
});