'use strict';

const num1Input = document.querySelector('#num1');
const num2Input = document.querySelector('#num2');
const operationSelect = document.querySelector('#operation');
const startButton = document.querySelector('#start');
const resultParagraph = document.querySelector('#result');

startButton.addEventListener('click', function () {
  const num1 = Number(num1Input.value);
  const num2 = Number(num2Input.value);
  const operation = operationSelect.value;

  let result;

  if (operation === 'add') {
    result = num1 + num2;
  } else if (operation === 'sub') {
    result = num1 - num2;
  } else if (operation === 'multi') {
    result = num1 * num2;
  } else if (operation === 'div') {
    result = num1 / num2;
  }

  resultParagraph.textContent = result;
});
