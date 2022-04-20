'use strict';

//player One DOM Elements
const score0El = document.querySelector('#score--0');
const current0El = document.querySelector('#current--0');
const player0El = document.querySelector('.player--0');

//player Two DOM Elements
const current1El = document.querySelector('#current--1');
const score1El = document.querySelector('#score--1');
const player1El = document.querySelector('.player--1');

// buttons DOM Elements
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const btnRoll = document.querySelector('.btn--roll');

// image DOM Elements
const diceEl = document.querySelector('.dice');

// activePlayer : to check which player is the player who currently playing
// score : the socre holder for each player
// currentScore : the current score of each player (after rolling the dice)

let scores, currentScore, activePlayer, playing;

// initial score function
const init = () => {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('.player--active');
    player1El.classList.remove('.player--active');
};

// roll a dice function
const roll = () => {
    // 1. generate a random number between 1 to 6
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    // 2. display the dice
    diceEl.classList.remove('hidden');
    // 2.1 display the dice number via image
    diceEl.src = `dice-${randomNumber}.png`;
    // 3. check if the random number is equal to 1
    if (randomNumber !== 1) {
        // 3.1 add the random number to the current score
        currentScore += randomNumber;
        // 3.2 display the current score on DOM
        document.querySelector(
            `#current--${activePlayer}`
        ).textContent = currentScore;
    } else {
        //reset score before switch to another player
        currentScore = 0;
        document.querySelector(
            `#current--${activePlayer}`
        ).textContent = currentScore;
        // 4. switch to another player
        // 4.1  if the random number is equal to 1, switch player
        // if we change player 0, switch player 1
        // #current--${activePlayer} 0 or 1
        // In there we are checking the player who is currently playing
        // if activePlayer is player 0, then activePlayer === 0 ? 1 : 0 will be 1 and vice versa
        activePlayer = activePlayer === 0 ? 1 : 0;
        // 4.2 remove the active class from the player who is currently playing
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
    }
};

// hold score function
const hold = () => {
    console.log('hold');
};

// Event Listeners
btnNew.addEventListener('click', init);
btnHold.addEventListener('click', hold);
btnRoll.addEventListener('click', roll);
