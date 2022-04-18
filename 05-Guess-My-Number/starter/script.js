"use strict";
//score system manipulation rules
// Too High -> -1
// Too Low -> -1

// meesage show on the DOM
const message = document.querySelector(".message");

// The ? or the Number at the middle of the DOM
const numberTag = document.querySelector(".number");

// Button DOM element
const checkBtn = document.querySelector(".check");
const resetBtn = document.querySelector(".again");

// Create a random number for Secret Number
let randomNumber = Math.floor(Math.random() * 20) + 1;

//Score System value declaration
let score = 20;
let highscore = 0;
const scoreDom = document.querySelector(".score");
const highscoreDom = document.querySelector(".highscore");

// Function for the game logic
function main() {
    const guess = Number(document.querySelector(".guess").value);
    // When there is no gueesing number
    if (!guess) {
        msg("Please enter a number");
        // When Number is Correct
    } else if (guess === randomNumber) {
        // DOM text output
        msg("🧧 Correct Number");
        document.querySelector("body").style.backgroundColor = "green";
        numberTag.textContent = randomNumber;
        numberTag.style.width = "30rem";
        // check the highest score only when you win the game.
        HighestScore();
    } else if (guess !== randomNumber) {
        if (score > 1) {
            // DOM text output
            msg(
                guess > randomNumber
                    ? "😓 Your Guessing is too High"
                    : "😓 Your Guessing is too Low"
            );
            //calculate the score and output to the DOM
            score--;
            scoreDom.textContent = score;
        } else {
            msg("😓 You Lose the game !");
            scoreDom.textContent = 0;
        }
    }
}

// Functions for compare the highest score and save it
function HighestScore() {
    // if (highscore < score) {
    //     highscore = score;
    //     highscoreDom.textContent = highscore;
    // } else if (highscore > score) {
    //     highscore = highscore;
    //     highscoreDom.textContent = highscore;
    // } else {
    //     highscore = highscore;
    //     highscoreDom.textContent = highscore;
    // }
    highscore < score
        ? ((highscore = score), (highscoreDom.textContent = highscore))
        : ((highscore = highscore), (highscoreDom.textContent = highscore));
}

//Function foe display message
function msg(msgText) {
    message.textContent = msgText;
}

//Function for Reset
function Reset() {
    randomNumber = Math.floor(Math.random() * 20) + 1;
    score = 20;
    scoreDom.textContent = score;
    numberTag.style.width = "20rem";
    msg("Start guessing...");
    document.querySelector("body").style.backgroundColor = "#222";
    numberTag.textContent = "?";
    document.querySelector(".guess").value = "";
}

// EventListener , addEventListener(Type of event, function)
checkBtn.addEventListener("click", main);
resetBtn.addEventListener("click", Reset);
