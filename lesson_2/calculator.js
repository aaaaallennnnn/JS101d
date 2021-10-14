/**
 * wait, this was an example?
 * 🤡
 */

const os = require('os');
const rl = require('readline-sync');

const NUM_REGEX = /\d*\.?\d+/;
const OP_REGEX = /[-\+\*\/]/;

// because no numpad = typos :(
function trim(input, regex) {
  let res = input.match(regex);
  if (res[0] !== res.input) {
    console.log("trimmed invalid characters.");
  }
  return res[0];
}

/**
 * i didn't want to waste time typing this loop out three times
 * so i wasted even more time doing this instead!
 */
function getter(question, regex) {
  let temp;
  do {
    try {
      temp = trim(rl.question(question), regex);
    } catch {
      console.log('invalid input, enter input again');
    }
  } while (!temp);
  return temp;
}

console.log(`Welcome to calculator, ${os.userInfo().username}!`);

let num1 = getter('Enter the first number.\n', NUM_REGEX);
num1 = Number(num1);

let num2 = getter('Enter the second number.\n', NUM_REGEX);
num2 = Number(num2);

let operator = getter('Enter your operation:\n+ -, *, /\n', OP_REGEX);

let output;
switch (operator) {
  case '+':
    output = num1 + num2;
    break;
  case '-':
    output = num1 - num2;
    break;
  case '*':
    output = num1 * num2;
    break;
  case '/':
    output = num1 / num2;
    break;
  default:
    output = 'you broke the thing :(';
}

console.log(`the result is: ${output}`);