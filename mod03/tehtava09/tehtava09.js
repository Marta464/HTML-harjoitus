'use strict';

function even(numbers) {
  const evenNumbers = []; 

  for (const num of numbers) {
    if (num % 2 === 0) { 
      evenNumbers.push(num); 
    }
  }

  return evenNumbers;
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = even(numbers);

console.log('Alkuperäinen taulukko:', numbers);
console.log('Parilliset luvut:', evenNumbers);