'use strict';

function concat(strings) {
  let result = '';

  for (const str of strings) {
    result += str;
  }

  return result;
}

const names = ['Johnny', 'DeeDee', 'Joey', 'Marky'];
const combinedText = concat(names);

document.querySelector('#target').innerHTML = combinedText;
