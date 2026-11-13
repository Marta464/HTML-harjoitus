'use strict';

function rollDice(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

const sides = Number(prompt('Enter the number of sides on the dice:'));
const listElement = document.querySelector('#rolls');
let result = 0;

while (result !== sides) {
  result = rollDice(sides);
  listElement.innerHTML += `<li>${result}</li>`;
}
