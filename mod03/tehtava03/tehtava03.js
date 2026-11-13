'use strict';

const dogs = [];

for (let i = 0; i < 6; i++) {
  const name = prompt(`Enter the name of dog ${i + 1}:`);
  dogs.push(name);
}

dogs.sort();
dogs.reverse();

const listElement = document.querySelector('#dogs');

for (const dog of dogs) {
  listElement.innerHTML += `<li>${dog}</li>`;
}
