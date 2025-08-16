// // evenNumbers.js
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evenNumbers = numbers.filter(num => num % 2 === 0);

// console.log("짝수만 출력:", evenNumbers);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(num => num % 2 === 0);

document.getElementById("result").textContent = "짝수: " + evenNumbers.join(", ");
