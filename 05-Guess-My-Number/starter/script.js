"use strict";
//score system manipulation rules
// Too High -> -1
// Too Low -> -1

const msg = document.querySelector(".message");

const numberTag = document.querySelector(".number");

// Button DOM element
const checkBtn = document.querySelector(".check");
const resetBtn = document.querySelector(".again");

// score system
const highscore = document.querySelector(".highscore");

// Create a random number for Secret Number
let randomNumber = Math.floor(Math.random() * 20) + 1;

const scoreDom = document.querySelector(".score");
let score = 20;

function main() {
    const guess = Number(document.querySelector(".guess").value);
    // When there is no gueesing number
    if (!guess) {
        msg.textContent = "Please enter a number";
        msg.style.color = "red";

        // When Number is Correct
    } else if (randomNumber === guess) {
        // DOM text output
        msg.textContent = "🧧 Correct Number";
        document.querySelector("body").style.backgroundColor = "green";
        numberTag.textContent = randomNumber;
        numberTag.style.width = "30rem";
        // When number is too high
    } else if (guess > randomNumber) {
        if (score > 1) {
            // DOM text output
            msg.textContent = "😓 Your Guessing is too High";
            score--;
            scoreDom.textContent = score;
        } else {
            msg.textContent = "😓 You Lose the game !";
            scoreDom.textContent = 0;
        }
        // When number is too low
    } else if (guess < randomNumber) {
        if (score > 1) {
            // DOM text output
            msg.textContent = "😓 Your Guessing is too Low";
            score--;
            scoreDom.textContent = score;
        } else {
            msg.textContent = "😓 You Lose the game !";
            scoreDom.textContent = 0;
        }
    }
}

function Reset() {
    randomNumber = Math.floor(Math.random() * 20) + 1;
    score = 20;
    scoreDom.textContent = score;
    numberTag.style.width = "20rem";
    msg.textContent = "Start guessing...";
    document.querySelector("body").style.backgroundColor = "#222";
    numberTag.textContent = "?";
    document.querySelector(".guess").value = "";
}
// addEventListener
// addEventListener is a method
// addEventListener(Type of event, function)

// click this button to check the value of input field
checkBtn.addEventListener("click", main);

// Click this button to reset the game
resetBtn.addEventListener("click", Reset);
