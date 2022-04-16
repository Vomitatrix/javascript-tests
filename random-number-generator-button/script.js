let button = document.querySelector('button');
let span = document.querySelector('span');
let number;

button.addEventListener('click', randomNumber);

function randomNumber() {
    number = Math.floor((Math.random() * 10)+1);
    span.textContent = number;
}