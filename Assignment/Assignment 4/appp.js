// 1. **Map Transformation:**
// - Q: Given an array of integers, use the `map` method to square each element and return a new array with the squared values.

// const realArray = [5, 4, 3, 2, 1];
// const squaredArray = realArray.map(num => num * num);
// console.log(squaredArray); 

// 2. **Filter and Map Combination:**
// - Q: Take an array of strings, filter out the ones with a length less than 5, and then capitalize the remaining strings using the `map` method.

// const stringsArray = ["apple", "banana", "orange", "grape", "kiwi"];

// const filteredAndCapitalized = stringsArray
//   .filter(str => str.length >= 5) // Filter strings with length >= 5
//   .map(str => str.toUpperCase()); // Capitalize the remaining strings

// console.log(filteredAndCapitalized); // Output: ["APPLE", "BANANA", "ORANGE"]


// 3. **Sorting Objects:**
// - Q: Given an array of objects with a 'price' property, use the `sort` method to arrange them in descending order based on their prices.
// const products = [
//         { name: "Product A", price: 25 },
//         { name: "Product B", price: 15 },
//         { name: "Product C", price: 30 },
//         { name: "Product D", price: 20 }
//       ];
//       // Sort products array in descending order based on price
//       products.sort((a, b) => b.price - a.price);
//       console.log(products);


// 4. **Reduce for Aggregation:**
// - Q: Use the `reduce` method to find the total sum of all even numbers in an array of integers.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const sumOfEven = numbers.reduce((accumulator, currentValue) => {
//   if (currentValue % 2 === 0) {
//     return accumulator + currentValue; // Add even numbers to the accumulator
//   }
//   return accumulator; // Ignore odd numbers
// }, 0); // Initialize accumulator with 0

// console.log(sumOfEven); // Output: 30 (2 + 4 + 6 + 8 + 10 = 30)

// 5. **Find and Modify:**
// - Q: Given an array of objects with 'id' properties, use the `find` method to locate an object with a specific 'id' and update its 'status' property to 'completed'.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const sumOfEven = numbers.reduce((accumulator, currentValue) => {
//   if (currentValue % 2 === 0) {
//     return accumulator + currentValue; // Add even numbers to the accumulator
//   }
//   return accumulator; // Ignore odd numbers
// }, 0); // Initialize accumulator with 0

// console.log(sumOfEven); // Output: 30 (2 + 4 + 6 + 8 + 10 = 30)

// 6. **Chaining Methods:**
// - Q: Create a chain of array methods to find the average of all positive numbers in an array of mixed integers and return the result rounded to two decimal places.

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

// 7. **Conditional Filtering:**
// - Q: Implement a function that takes an array of objects with 'age' properties and returns an array of those who are adults (age 18 and above) using the `filter` method.

// function filterAdultsByAge(people) {
//     return people.filter(person => person.age >= 18);
//   }
//   const peopleArray = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 17 },
//     { name: 'Charlie', age: 30 },
//     { name: 'Diana', age: 16 },
//     { name: 'Eva', age: 20 }
//   ];
//   const adults = filterAdultsByAge(peopleArray);
//   console.log(adults); 
  
// 8. **Advanced Sorting:**
// - Q: Sort an array of strings based on their lengths in ascending order. If two strings have the same length, maintain their relative order in the sorted array.

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

// 9. **Nested Array Operations:**
// - Q: Given an array of arrays containing numbers, use a combination of array methods to flatten the structure and then calculate the sum of all the numbers.

// const arrayOfArrays = [
//         [1, 2, 3],
//         [4, 5],
//         [6, 7, 8]
//       ];
//       const flattenedArray = arrayOfArrays.reduce((accumulator, currentValue) =>  {
//         return accumulator.concat(currentValue);
//       }, []);
//       const sumOfNumbers = flattenedArray.reduce((total, number) => {
//         return total + number;
//       }, 0);
//       console.log(sumOfNumbers);

// 10. **Error Handling with Find:**
// - Q: Modify the `find` method to handle the scenario where the desired element is not found, returning a custom default object instead.

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
//   }; const defaultObject = { id: -1, name: 'Default' };
//    const result = findCustom(array, element => element.id === 4, defaultObject);
//   console.log(result);

// 11. **Map Method:**
// - Q: How does the `map` method work in JavaScript, and can you provide an example of when you might use it to manipulate an array of objects?

// const originalArray = [
//   { id: 1, name: 'Alice' },
//   { id: 2, name: 'Bob' },
//   { id: 3, name: 'Charlie' }
// ];
// const newArray = originalArray.map(item => {
//   return {
//     ...item,
//     name: item.name.toUpperCase() };
// });
// console.log(newArray);


// 12. **Filter Method:**
// - Q: Explain the purpose of the `filter` method. Provide an example where you use `filter` to extract elements from an array based on a specific condition.

// const numbers = [1, 5, 10, 15, 20];
// const filteredNumbers = numbers.filter(num => num > 10);
// console.log(filteredNumbers); 

// 13. **Sort Method:**
// - Q: Discuss the default behavior of the `sort` method for strings and numbers. How would you use a custom comparison function to sort an array of objects by a specific property?

// const numbers = [3, 1, 15, 10];
// numbers.sort();
// console.log(numbers); // Output: [1, 10, 15, 3]


// 14. **Reduce Method:**
// - Q: Describe the purpose of the `reduce` method and provide an example where you use it to compute a single value from an array of numbers.

// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 0);
// console.log(sum);

// 15. **Find Method:**
// - Q: How does the `find` method differ from `filter`? Give an example of a scenario where using `find` is more appropriate than `filter`.

// const numbers = [2, 8, 4, 10, 3];
// const firstGreaterThanFive = numbers.find((number) => {
//   return number > 5;
// });
// console.log(firstGreaterThanFive);

// 16. **Combining Methods:**
// - Q: Create a chain of array methods (`map`, `filter`, `reduce`, etc.) to transform an array of strings into a single concatenated string with a specific condition.

// const strings = ['apple', 'orange', 'kiwi', 'banana', 'grape'];
// const concatenatedString = strings
//   .filter((str) => str.length > 3) 
//   .map((str) => str + '!') 
//   .reduce((acc, currentValue) => acc + '-' + currentValue); 
// console.log(concatenatedString); 

// 17. **Callback Functions:**
// - Q: Explain the concept of callback functions in the context of array methods. Provide an example of using a callback function with the `map` method.

// const numbers = [1, 2, 3, 4, 5];
// const square = (number) => {
//   return number * number;
// };
// const squaredNumbers = numbers.map(square);
// console.log(squaredNumbers);

// 18. **Error Handling:**
// - Q: How would you handle potential errors when using array methods like `find` or `reduce`? Provide an example of error handling in such a scenario.

// const numbers = [1, 2, 3, 4, 5];
// try {
//   const sum = numbers.reduce((accumulator, currentValue) => {
//     if (currentValue === 4) {
//       throw new Error("Intentional error: Found 4");
//     }
//     return accumulator + currentValue;
//   }, 0);
//     console.log("Sum:", sum);
// } catch (error) {
//   console.error("Error occurred:", error.message);
// }

// 19. **Immutable Operations:**
// - Q: Discuss the importance of immutability when working with array methods. Demonstrate how you would perform immutable operations using methods like `map` or `filter`.

// const numbers = [1, 2, 3, 4, 5];
// const evenNumbers = numbers.filter((number) => number % 2 === 0);
// console.log("Original Array:", numbers); 
// console.log("Even Numbers Array:", evenNumbers);

// 20. **Performance Considerations:**
// - Q: Compare the performance implications of using `map` versus `forEach`. In what scenarios would you prefer one over the other, and why?

// const originalArray = [1, 2, 3];
// const newArray = originalArray.map(item => item * 2);
// console.log('Using map for transformation:');
// console.log('Original Array:', originalArray);
// console.log('New Array:', newArray);
// console.log('\n');
// const numbers = [1, 2, 3];
// console.log('Using forEach for side effects:');
// numbers.forEach(item => console.log(item));
// console.log('\n');
// const anotherArray = originalArray
//   .map(item => item * 2)
//   .filter(item => item > 4);
// console.log('Chaining map with other array methods:');
// console.log('Original Array:', originalArray);
// console.log('Transformed and Filtered Array:', anotherArray);
