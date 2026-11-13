'use strict';

const numbers = [];

while (true) {
  const num = Number(prompt('Enter a number:'));

  if (numbers.includes(num)) {
    alert('This number has already been given!');
    break;
  }

  numbers.push(num); 
}

numbers.sort((a, b) => a - b);

for (const n of numbers) {
  console.log(n);
}
