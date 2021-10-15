const RL = require('readline-sync');

let bill = RL.question("What is the bill?\n");
bill = Number(bill);

let tipRate = RL.question("What is the tip percentage?\n");
tipRate = Number(tipRate) / 100;

let tipAmt = Number(tipRate * bill);

console.log(`The tip is $${tipAmt.toFixed(2)}`);
console.log(`The total is $${(tipAmt + bill).toFixed(2)}`);