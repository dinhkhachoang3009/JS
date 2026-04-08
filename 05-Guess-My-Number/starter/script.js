'use strict';

//first part select an element.We can read textContent on that element
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'You got it 😍!';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value=23;
console.log(document.querySelector('.guess').value);

