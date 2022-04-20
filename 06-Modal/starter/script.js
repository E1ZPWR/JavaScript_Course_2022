'use strict';
//DOM variables declaration

// the Whole div -> including the button for close and h1 and paragraph
const modal = document.querySelector('.modal');
// the hiiden div for cover the body
const overlay =
    document.querySelector('.overlay');
// the button for close the modal
const btnCloseModal = document.querySelector(
    '.close-modal'
);
// three buttons for open the modal
const btnsOpenModal = document.querySelectorAll(
    '.show-modal'
);

// Show modal function
function btnShowAction() {
    //Remove Hiiden class to show the modal
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

// Hide modal function
function btnHideAction() {
    //Add Hiiden class to Hide the modal again
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

// EventListener for Show and Hide modal
btnsOpenModal.forEach((btn) => {
    btn.addEventListener('click', btnShowAction);
});

btnCloseModal.addEventListener(
    'click',
    btnHideAction
);

// click on the overlay(blanck area) will also hide the modal
overlay.addEventListener('click', btnHideAction);

// press esc key on keyborad will also hide the modal
// The keyborad events is a global event
// and we usally list and on the whole documents
document.addEventListener('keydown', (e) => {
    // if the modal DOES NOT(!) cotain the hidden class
    // -> this means the modal dic is currently shown
    // so we need to hide the modal again
    if (
        e.key === 'Escape' &&
        !modal.classList.contains('hidden')
    ) {
        btnHideAction();
        console.log(`${e.key} key is pressed`);
    }
});
