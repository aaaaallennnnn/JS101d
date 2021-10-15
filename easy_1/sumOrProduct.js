const RL = require('readline-sync');

let range = parseInt(RL.question('Enter an integer greater than 0: '));
let op = RL.question('Enter "s" to compute the sum, or "p" to compute the product: ');

let res = (op === 's') ? 0 : 1;
for(let i = 1; i <= range; i++) {
  op === 's' ? res += i : res *= i;
}

console.log(`The ${op === 's' ? 'sum' : 'product'} of the integers between 1 and ${range} is ${res}.`);