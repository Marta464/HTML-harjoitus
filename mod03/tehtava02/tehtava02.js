'use strict';

const count = Number(prompt('Enter the number of participants:'));
const participants = [];

for (let i = 0; i < count; i++) {
  const name = prompt(`Enter the name of participant ${i + 1}:`);
  participants.push(name);
}

participants.sort();

const listElement = document.querySelector('#list');

for (const name of participants) {
  listElement.innerHTML += `<li>${name}</li>`;
}
