"use strict";

// get DOM elements
const msg = document.querySelector(".message");

const numberTag = document.querySelector(".number");

const currentSocre = document.querySelector(".score");

const checkBtn = document.querySelector(".check");

let randomNumber = Math.floor(Math.random() * 20) + 1;

// addEventListener
// addEventListener is a method
// addEventListener(Type of event, function)
// click this button to check the value of input field

function main() {
    // get input DOM from HTML
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess);
    console.log(randomNumber);

    if (!guess) {
        msg.textContent = "Please enter a number";
        msg.style.color = "red";
        return;
    } else if (randomNumber === guess) {
        msg.textContent = "🧧 Correct Number";
        msg.style.color = "green";
        numberTag.textContent = randomNumber;
        numberTag.style.color = "green";
        return;
    }
}
// when we get some thing from a user interface ,
// the type of the value will be returned as string
// but in this case,we need to compare the value with number generator
// so we should covert the value type from input field to number (String to number)
checkBtn.addEventListener("click", main);
