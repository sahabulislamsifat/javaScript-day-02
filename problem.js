// sum of array numbers

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const numbers = [1, 2, 3, 4, 5];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let sum = 0;

// for (let item of numbers) {
//   //   sum = sum + item;
//   sum += item;
// }

// console.log(sum);

const evens = [];

// const x = 5;
// const x = 6;
// console.log(x % 2 === 0);

// for (let item of numbers) {
//   if (item % 2 === 1) {
//     evens.push(item);
//   }
// }
for (let item of numbers) {
  if (item % 2 === 0) {
    evens.push(item);
  }
}

console.log(evens);
