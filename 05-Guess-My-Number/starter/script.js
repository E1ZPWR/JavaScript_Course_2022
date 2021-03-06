'use strict';

//=================================
//score system manipulation rules
// Too High -> -1
// Too Low -> -1
//=================================

//======variable declaration======

// message show on the DOM
const message = document.querySelector('.message');
// The ? or the Number at the middle of the DOM
const numberTag = document.querySelector('.number');
// Button DOM element
const checkBtn = document.querySelector('.check');
const resetBtn = document.querySelector('.again');

// Create a random number for Secret Number
let randomNumber = Math.floor(Math.random() * 20) + 1;

//Score System value declaration
let score = 20;
let highscore = 0;
const scoreDom = document.querySelector('.score');
const highscoreDom = document.querySelector('.highscore');

// Functions for compare the highest score and save it
function HighestScore() {
    highscore < score
        ? ((highscore = score), (highscoreDom.textContent = highscore))
        : ((highscore = highscore), (highscoreDom.textContent = highscore));
}

//Function foe display message
function msg(msgText) {
    message.textContent = msgText;
}

// When the guess number is empty
function empty() {
    msg('Please enter a number');
}

// When the guess number is equal to the random number
function equally() {
    msg('🧧 Correct Number');
    document.querySelector('body').style.backgroundColor = 'green';
    numberTag.textContent = randomNumber;
    numberTag.style.width = '30rem';
    // check the highest score only when you win the game.
    HighestScore();
}

// When the Guess number is higher or lower(Not equal to) than the random number
function notEqually() {
    const guess = Number(document.querySelector('.guess').value);
    if (score > 1) {
        msg(guess > randomNumber ? '😓 Your Guessing is too High' : '😓 Your Guessing is too Low'),
            score--,
            (scoreDom.textContent = score);
    } else {
        msg('😓 You Lose the game !'), (scoreDom.textContent = 0);
    }
}

// Function for the game logic
function main() {
    const guess = Number(document.querySelector('.guess').value);
    /**
     * When there is no guessing number
     * the if-else condition will return boolean value
     * the if statement will only run when the condition is true
     * therefore in this case, if no guess number , then guess will be 0 , so the condition will be false,
     * so we should use ! to make the condition true
     * the symbol of ! in js means "not"
     * therefore in this case, -> NOT false , -> true
     */
    if (!guess) {
        empty();
    }
    // When Number is Correct
    else if (guess === randomNumber) {
        equally();
    } else if (guess !== randomNumber) {
        notEqually();
    }
}

//Function for Reset
function Reset() {
    randomNumber = Math.floor(Math.random() * 20) + 1;
    score = 20;
    scoreDom.textContent = score;
    numberTag.style.width = '20rem';
    msg('Start guessing...');
    document.querySelector('body').style.backgroundColor = '#222';
    numberTag.textContent = '?';
    document.querySelector('.guess').value = '';
}

/**
 * EventListener , addEventListener(Type of event, function)
 * Type of event: click, mouseover, mouseout, keydown, keyup, keypress
 */
checkBtn.addEventListener('click', main);
resetBtn.addEventListener('click', Reset);
