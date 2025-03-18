// // Write the program to greet the person by there first name and last name
// let firstName = "John";
// let lastName = "Doe";
// console.log(`Happy Birthday ${firstName} ${lastName}`);

// // Write a program that greets a person based on there gender
// let gender = "boy";
// if ((gender = "boy")) {
//   console.log("hy boy");
// } else {
//   console.log("hy girl");
// }

// // Write a program that counts 0 to 100 and prints
// let n = 1000;
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//   sum += i;
// }

// console.log(sum);

// Write a program that prints all the even numbers in an array
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 0) {
//     console.log(arr[i]);
//   }
// }

// Write a program to print the biggest number in an array
let arr2 = [1, 2, 3, 41, 5];
let largest = arr2[0];

for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] > largest) {
    largest = arr2[i];
  }
}
console.log(largest);

// Write a program that reverses all the elements of an array
let arr3 = [1, 2, 3, 4, 5];
console.log(arr3.reverse());

// Write a program that prints all the males people first name given a complex object
const people = [
  { firstName: "John", lastName: "Doe", age: 25, gender: "male" },
  { firstName: "Emma", lastName: "Smith", age: 30, gender: "female" },
  { firstName: "Michael", lastName: "Johnson", age: 22, gender: "male" },
  { firstName: "Olivia", lastName: "Brown", age: 28, gender: "female" },
  { firstName: "David", lastName: "Williams", age: 35, gender: "male" },
];

for (let i = 0; i < people.length; i++) {
  if (people[i]["gender"] === "male") {
    console.log(people[i]["firstName"]);
  }
}
