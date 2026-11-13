'use strict';

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}


const listElement = document.querySelector('#rolls');
let result = 0;

while (result !== 6) {
  result = rollDice();
  listElement.innerHTML += `<li>${result}</li>`;
}
