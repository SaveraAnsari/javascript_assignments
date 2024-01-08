// Q#01  
//const realArray = [5, 4, 3, 2, 1];

// const squaredArray = realArray.map(num => num * num);

// console.log(squaredArray); // Output: [1, 4, 9, 16, 25]

//Q#02
// const stringsArray = ["apple", "banana", "orange", "grape", "kiwi"];

// const filteredAndCapitalized = stringsArray
//   .filter(str => str.length >= 5) // Filter strings with length >= 5
//   .map(str => str.toUpperCase()); // Capitalize the remaining strings

// console.log(filteredAndCapitalized); // Output: ["APPLE", "BANANA", "ORANGE"]

//Q#03
// const products = [
//     { name: "Product A", price: 25 },
//     { name: "Product B", price: 15 },
//     { name: "Product C", price: 30 },
//     { name: "Product D", price: 20 }
//   ];
  
//   // Sort products array in descending order based on price
//   products.sort((a, b) => b.price - a.price);
  
//   console.log(products);
  
//Q#04
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const sumOfEven = numbers.reduce((accumulator, currentValue) => {
//   if (currentValue % 2 === 0) {
//     return accumulator + currentValue; // Add even numbers to the accumulator
//   }
//   return accumulator; // Ignore odd numbers
// }, 0); // Initialize accumulator with 0

// console.log(sumOfEven); // Output: 30 (2 + 4 + 6 + 8 + 10 = 30)

// //Q#05
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const sumOfEven = numbers.reduce((accumulator, currentValue) => {
//   if (currentValue % 2 === 0) {
//     return accumulator + currentValue; // Add even numbers to the accumulator
//   }
//   return accumulator; // Ignore odd numbers
// }, 0); // Initialize accumulator with 0

// console.log(sumOfEven); // Output: 30 (2 + 4 + 6 + 8 + 10 = 30)


//Q#6
// const mixedIntegers = [-2, 5, 8, -3, 10, -6, 4, 7];

// const positiveAverage = mixedIntegers
//   .filter(num => num > 0) // Filter positive numbers
//   .reduce((sum, num, index, arr) => {
//     sum += num;
//     if (index === arr.length - 1) {
//       return sum / arr.length; // Calculate average at the end of reduce
//     }
//     return sum;
//   }, 0);

// const roundedAverage = positiveAverage.toFixed(2); // Round to two decimal places

// console.log(parseFloat(roundedAverage)); // Output the average


//Q#07
// function filterAdultsByAge(people) {
//     return people.filter(person => person.age >= 18);
//   }
  
//   // Example array of objects with 'age' properties
//   const peopleArray = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 17 },
//     { name: 'Charlie', age: 30 },
//     { name: 'Diana', age: 16 },
//     { name: 'Eva', age: 20 }
//   ];
  
//   const adults = filterAdultsByAge(peopleArray);
//   console.log(adults); // Output: [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 30 }, { name: 'Eva', age: 20 }]
  
//Q#08
// const stringsArray = ['apple', 'banana', 'kiwi', 'orange', 'grape', 'pear'];

// stringsArray.sort((a, b) => {
//   // Compare the lengths of strings
//   if (a.length !== b.length) {
//     return a.length - b.length; // Sort by length in ascending order
//   } else {
//     return stringsArray.indexOf(a) - stringsArray.indexOf(b);
//     // Maintain relative order for strings with the same length
//   }
// });

// console.log(stringsArray);


//Q#09
// const arrayOfArrays = [
//     [1, 2, 3],
//     [4, 5],
//     [6, 7, 8]
//   ];
  
//   const flattenedArray = arrayOfArrays.reduce((accumulator, currentValue) => {
//     return accumulator.concat(currentValue);
//   }, []);
  
//   const sumOfNumbers = flattenedArray.reduce((total, number) => {
//     return total + number;
//   }, 0);
  
//   console.log(sumOfNumbers); // Output: 36 (1+2+3+4+5+6+7+8 = 36)
  
//Q#10
// const array = [
//     { id: 1, name: 'Alice' },
//     { id: 2, name: 'Bob' },
//     { id: 3, name: 'Charlie' }
//   ];
  
//   const findCustom = (arr, condition, defaultValue) => {
//     const found = arr.find(condition);
//     if (found) {
//       return found;
//     } else {
//       return defaultValue; // Return default value if not found
//     }
//   };
  
//   const defaultObject = { id: -1, name: 'Default' };
  
//   const result = findCustom(array, element => element.id === 4, defaultObject);
//   console.log(result); // Output: { id: -1, name: 'Default' }
  

//Q#11
// Original array of objects
// const originalArray = [
//   { id: 1, name: 'Alice' },
//   { id: 2, name: 'Bob' },
//   { id: 3, name: 'Charlie' }
// ];

// // Using map to create a new array with modified elements
// const newArray = originalArray.map(item => {
//   return {
//     ...item,
//     name: item.name.toUpperCase() // Modifying the 'name' property to uppercase
//   };
// });

// console.log(newArray);


//  Q#12
// Original array of numbers
// const numbers = [1, 5, 10, 15, 20];

// // Using filter to extract numbers greater than 10
// const filteredNumbers = numbers.filter(num => num > 10);

// console.log(filteredNumbers); // Output: [15, 20]

//q#13
// const numbers = [3, 1, 15, 10];
// numbers.sort();
// console.log(numbers); // Output: [1, 10, 15, 3]


//Q #14
// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 0);

// console.log(sum); // Output will be 15 (1 + 2 + 3 + 4 + 5)

//q#15
// const numbers = [2, 8, 4, 10, 3];

// const firstGreaterThanFive = numbers.find((number) => {
//   return number > 5;
// });

// console.log(firstGreaterThanFive); // Output will be 8


//Q#16
// const strings = ['apple', 'orange', 'kiwi', 'banana', 'grape'];

// const concatenatedString = strings
//   .filter((str) => str.length > 3) // Filter strings with length > 3
//   .map((str) => str + '!') // Add an exclamation mark to each string
//   .reduce((acc, currentValue) => acc + '-' + currentValue); // Concatenate strings with a dash

// console.log(concatenatedString); // Output will be "apple!-orange!-banana!-grape!"

//Q#17
// const numbers = [1, 2, 3, 4, 5];

// // Callback function to square each number
// const square = (number) => {
//   return number * number;
// };

// // Using the map method with the square callback function
// const squaredNumbers = numbers.map(square);

// console.log(squaredNumbers); // Output will be [1, 4, 9, 16, 25]



//Q#18
// const numbers = [1, 2, 3, 4, 5];

// try {
//   const sum = numbers.reduce((accumulator, currentValue) => {
//     if (currentValue === 4) {
//       throw new Error("Intentional error: Found 4");
//     }
//     return accumulator + currentValue;
//   }, 0);

//   console.log("Sum:", sum);
// } catch (error) {
//   console.error("Error occurred:", error.message);
// }


//Q#19

const numbers = [1, 2, 3, 4, 5];

// Filtering even numbers using filter (immutable operation)
const evenNumbers = numbers.filter((number) => number % 2 === 0);

console.log("Original Array:", numbers); // Output: [1, 2, 3, 4, 5]
console.log("Even Numbers Array:", evenNumbers); // Output: [2, 4]
