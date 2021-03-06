const buttonGenerator = document.querySelector('#buttonGenerator');
const buttonRangeChange = document.querySelector('#buttonRangeChange');
const numberRangeDisplay = document.querySelector('#numberRange');
const generatedNumber = document.querySelector('#generatedNumber');

let numberRange = 10;
let number;

buttonGenerator.addEventListener('click', generateNumber);
buttonRangeChange.addEventListener('click', changeRange);

function generateNumber() {
    number = Math.floor((Math.random() * numberRange)+1);
    generatedNumber.textContent = number;
}

function changeRange() {
    numberRange = prompt('What do you want to change the range to?');

    if (!(numberRange >= 1) || (numberRange = NaN)) {
        alert('The number must be 1 or more.');
        numberRange = 1;
    }
    
    numberRangeDisplay.textContent = numberRange;
}