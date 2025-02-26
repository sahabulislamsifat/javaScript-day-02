// console.log("Sifat");
// console.log("Sifat");
// console.log("Sifat");
// console.log("Sifat");
// console.log("Sifat");
// console.log("Sifat");
// console.log("Sifat");
// console.log("Sifat");

/*

for (Starting value; End condition; increment or decrement){

}

*/

// for (let i = 1; i <= 5; i++) {
//   console.log("Sifat");
// }
// for (let i = 1; i <= 50; i++) {
//   console.log("Sifat");
// }
// for (let i = 1; i <= 50; i++) {
//   console.log("Sifat", i);
// }
// for (let i = 1; i <= 50; i--) {
//   console.log("Sifat", i);
// }
// for (let i = 51; i >= 50; i--) {
//   console.log("Sifat", i);
// }

// const flowers = ["joba", "rojonigondha", "togor", "dalia", "golap"];

// console.log(flowers[0]);
// console.log(flowers[1]);
// console.log(flowers[2]);
// console.log(flowers[3]);
// console.log(flowers[4]);
// console.log(flowers[5]);

// for (let i = 0; i < 5; i++) {
// for (let i = 0; i <= flowers.length - 1; i++) {
// for (let i = 0; i < flowers.length; i++) {
//   //   console.log(flowers);
//   console.log(flowers[i]);
// }

// for (let i = flowers.length - 1; i >= 0; i--) {
//   //   console.log(flowers[i]);
// //   console.log(i);
// }

// While Loop
// const flowers = ["joba", "rojonigondha", "togor", "dalia", "golap"];

// for (let i = 0; i <= 4; i++) {
//   console.log(flowers[i]);
// }

/*

while( condition ){
tasks

increment or decrement

}

*/

// let i = 0;

// while (i < flowers.length) {
//   console.log(flowers[i]);
//   i++;
// }

// let i = flowers.length - 1;

// while (i >= 0) {
//   console.log(flowers[i]);
//   i--;
// }

// For of Loop
// const flowers = ["joba", "rojonigondha", "togor", "dalia", "golap"];

// for (let item of flowers) {
//   console.log(item);
// }
// for (let item of flowers.reverse()) {
//   console.log(item);
// }

// Nested loop

// for (let i = 1; i <= 5; i++) {
//   console.log("Hello this is me from Bangladesh", i);
//   for (let i = 1; i <= 3; i++) {
//     console.log("Hii this is Dhaka", i);
//   }
// }

// Loop Break

const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < digits.length; i++) {
  //   if (digits[i] === 5) {
  //     break;
  //   }
  if (digits[i] === 5) {
    continue;
  }
  console.log(digits[i]);
  //   console.log("Loop Break");
}
