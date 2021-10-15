const RL = require('readline-sync');
const M_TO_FT = 10.7639;

let type = RL.question("Enter the input type: 1)meters  2)feet\n");
type = parseInt(type);

let num1 = RL.question("Enter the length of the room in meters: ");
num1 = Number(num1);
let num2 = RL.question("Enter the width of the room in meters: ");
num2 = Number(num2);
let area = num1 * num2;

if(type === 1) {
  console.log(`The area of the room is ${area.toFixed(2)} square meters (${(area * M_TO_FT).toFixed(2)} square feet).`);
} else {
  console.log(`The area of the room is ${area.toFixed(2)} square feet (${(area / M_TO_FT).toFixed(2)} square meters).`);
}