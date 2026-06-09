'use strict';

//first part select an element.We can read textContent on that element

const generateSecret = function () {
  return Math.floor(Math.random() * 20) + 1;
};

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

let secretNumber = generateSecret();
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //when no number entered
  if (!guess) {
    displayMessage('No number received🤡');
  }

  //when guess correct
  else if (guess === secretNumber) {
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    displayMessage('You got it 😍!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  }

  //when guess wrong
  else if (guess !== secretNumber) {
    const hint = guess > secretNumber ? '📈Too high!' : '📉Too low!';
    if (score > 1) {
      displayMessage(hint);
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥You lost');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = generateSecret();
  score = 20;
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
