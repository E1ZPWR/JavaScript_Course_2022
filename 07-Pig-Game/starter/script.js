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

// player active background DOM Elements
const playerActive = document.querySelector('.player--active');

// initial score
score0El.textContent = 0;
score1El.textContent = 0;
current0El.textContent = 0;
current1El.textContent = 0;
