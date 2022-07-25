'use strict';


// const result = confirm('Are you??');
// console.log(result);

const answers = [];

answers[0] = prompt('Ваше имя');
answers[1] = prompt('Ваш возраст');
answers[2] = prompt('Ваш город');

console.log(typeof(answers));

let incr = 10,
    decr = 10;

console.log(++incr);
console.log(--decr);
