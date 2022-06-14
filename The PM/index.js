// link btn
const kdo = document.querySelector('#kdo');
const pdo = document.querySelector('#pdo');
// div paragraph
const kdiv = document.querySelector('#kdiv');
const pdiv = document.querySelector('#pdiv');

function showk() {
    kdiv.style.display = 'block';
}

function showp() {
    pdiv.style.display = 'block';
}

kdo.addEventListener('click', showk);
pdo.addEventListener('click', showp);
