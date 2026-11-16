'use strict';

const calcInput = document.querySelector('#calculation');
const startButton = document.querySelector('#start');
const resultParagraph = document.querySelector('#result');

startButton.addEventListener('click', function () {
  const input = calcInput.value;
  let result;

  if (input.includes('+')) {
    const parts = input.split('+');
    result = Number(parts) + Number(parts);
  } else if (input.includes('-')) {
    const parts = input.split('-');
    result = Number(parts) - Number(parts);
  } else if (input.includes('*')) {
    const parts = input.split('*');
    result = Number(parts) * Number(parts);
  } else if (input.includes('/')) {
    const parts = input.split('/');
    result = Number(parts) / Number(parts);
  }

  resultParagraph.textContent = result;
});
