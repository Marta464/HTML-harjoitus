'use strict';

const numbers = [];
let num;

while (num !== 0) {
  num = Number(prompt('Enter a number (0 to stop):'));
  if (num !== 0) {
    numbers.push(num);
  }
}

numbers.sort((a, b) => b - a);

for (const n of numbers) {
  console.log(n);
}
