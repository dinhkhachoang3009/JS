'use strict';

//first part select an element.We can read textContent on that element
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'You got it 😍!';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value=23;
console.log(document.querySelector('.guess').value);
*/

const secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number received🤡';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'You got it 😍!';
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥You lost';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥You lost';
      document.querySelector('.score').textContent = 0;
    }
  }
});
