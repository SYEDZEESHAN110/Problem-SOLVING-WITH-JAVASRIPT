const number = prompt("Enter a number greater than 5 digits:");

let sum = 0;

for (let i = 0; i < number.length; i++) {
  const digit = parseInt(number[i]);

  if (digit % 2 === 1) {
    sum += digit;
  }
}

console.log(`The sum of all odd digits in ${number} is ${sum}.`);
