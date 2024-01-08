// 1. Rewrite the following code using a ternary operator:
// let result;
// if (score >= 80) {
//     result = "Pass";
// } else {
//     result = "Fail";
// }
// let score = 70;
// let result = score >= 80 ? "pass":"Fail" ;
// console.log(result)

// 2. How does the optional chaining operator (?.) work, and how can it be used to access nested properties of an object?

// let bio ={
//     name:{
//         fatherName:{
//             Email:
//                 "abc123@gmail.com"
            
//         }
//     }
// }

// let result = bio.name?.fatherName?.Email
// console.log(result)

// Nested object
// let bio ={
//     name:{
//         fatherName:{
//             Email:"abc123@gmail.com",
//             Contact:"24243242",
//             Address:{
//                 city: {
//                 countrty:"Pakitsan",
//                 }
//             }
//         }
        
//     }
// }

// let result = bio.name?.fatherName?.Address?.city?.countrty
// console.log(result)


// Compare the for...in loop and the for...of loop in terms of their use cases and the types of values they iterate over.
// let bio ={
//     name:{
//         fatherName:{
//             Email:"abc123@gmail.com",
//             Contact:"24243242",
//             Address:{
//                 country: {
//                     area:"Malir",
//                     city:"Pakitsan",
//                 }
//             }
//         }
        
//     }
// }
// function recursion(bio){
// for(let i in bio){
//     if(typeof bio[i] === 'object' && bio[i] !== null){
//         recursion(bio[i])
//     }
//     else{
//     console.log(i,bio[i])
//     }
// }
// }
// recursion(bio)


//for of
// let temp = []
// const arr = [1,2,4,[45,8,9,[34]]];
// console.log(arr)
// for(let i of arr){
//     temp = arr.flat()
// }
// console.log(temp)



// 4. Define a function calculateAverage that takes an array of numbers as an argument and returns the average value.

// function calculateAverage(arr){
//     const sum = arr.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;}, 0);
//     avg = sum / arr.length;
//     console.log(`The Average of \[ ${arr}\] is : ${avg}`); 
// }
// const arr = [1,2,3,4,5]
// calculateAverage([1,2,3,4,5])


// . Explain the concept of "closures" in JavaScript and provide an example of their practical use.
// function outerFunction() {
//     let outerVariable = 10;
//     function innerFunction() {
//       console.log(outerVariable);
//     }
//     return innerFunction;
//   }
//   const closureExample = outerFunction();
//   closureExample(); 

// Create an object named student with properties name, age, and grades. Add a method calculateAverage that calculates the average of the grades.

// let student ={
//     name:"Savera",
//     age:21,
//     grades :[12,44,77,97,55]
// };
// function calculateAverage(student){
//     const sum = student.grades.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
//     avg = sum / student.grades.length;
//     console.log(`The Average of Grades \[ [${student.grades}]\] is : ${avg}`); 
// }
// calculateAverage(student)

// How can you clone an object in JavaScript and also give one example each deep copy, shallow copy, and reference copy

// Reference copy

// const originalObject = { name: "Savera", age: 21 };
// const referenceCopy = originalObject;
// // changes in originalObject
// originalObject.age = 26;
// console.log("Original object result: " + originalObject.age); 
// console.log("reference copy results:",referenceCopy.age); // Output: 26

// Shallow Copy

// Shallow copy
// const originalObject = {
//         name:"Savera",
//         age:21,
//         subjects :["Programming","Statistic"]
//     };
// const shallowCopy = Object.assign({}, originalObject);

// // Modify 
// originalObject.subjects.push("maths");
// console.log("originalObject result:",originalObject.subjects)
// console.log("shallow copy result ",shallowCopy.subjects);

// Deep Copy First Method
// Original object with nested structure
// const originalObject = {
//     name: "Savera",
//     age: 21,
//     address: {
//       city: "Karachi",
//       country: "Pakistan"
//     }
//   };
//   const deepCopy = JSON.parse(JSON.stringify(originalObject));
  
//   // Modify 
//   originalObject.address.city = "Islamabad";
//   console.log("originalObject city is : ",originalObject.address.city);
//   console.log("deep copy city is : ",deepCopy.address.city); 
  
// Deep Copy Second Method
// Import the cloneDeep function from lodash

// import cloneDeep from 'lodash/cloneDeep';

// const originalObject = {
//         name: "Savera",
//         age: 21,
//         address: {
//           city: "Karachi",
//           country: "Pakistan"
//         }
//       };
// const deepCopy = cloneDeep(originalObject);

// // Modify 
// originalObject.address.city = "Islamabad";

// console.log("originalObject city is : ",originalObject.address.city);
// console.log("deep copy city is : ",deepCopy.address.city); 


// 8. Write a loop that iterates over an array of numbers and logs whether each number is even or odd, using a ternary operator.

// let arr = [1,2,3,4,5,6,7,8,9,10]
// for (i of arr){
//     console.log(i % 2 === 0? `${arr[i]} is even` : `${arr[i]} is odd`)
// }

//9. Describe the differences between the for loop, while loop, and do...while loop in JavaScript. When might you use each?

// const arr = [1,2,3,4,5,6,7,3457,3]
// for (let i=0;i<arr.length;i++){
//     console.log(arr[i])
// }

// let num = 4;
// let i = 0;

// do {
//   console.log("This is inside the do block");
//   console.log(i);
//   i++;
// } while (i < num);

// 10. Provide an example of using optional chaining within a loop to access a potentially missing property of an object.

// const students = [
//     { name: "Savera", grades: { math: 95, science: 89 } },
//     { name: "Sana", grades: { math: 88 } },
//     { name: "Jaweria" } 
//   ];
  
//   for (const s of students) {
//     const mathGrade = s?.grades?.math;
  
//     // Check if the property exists
//     if (mathGrade !== undefined) {
//       console.log(`${s.name}'s math grade: ${mathGrade}`);
//     } else {
//       console.log(`${s.name} does not have a math grade.`);
//     }
//   }
  
// Write a for...in loop that iterates over the properties of an object and logs each property name and value.

// const originalObject = {
//             name:"Savera",
//             age:21,
//             subjects :"Programming"
//         };

// for(let i in originalObject){
//     for(let j in originalObject)
//     console.log(i,originalObject[i])
    
// }

// Explain the use of the break and continue statements within loops. Provide scenarios where each might be used.

// const array = [1, 3, 5, 7, 9, 11];
// const searchValue = 5;

// for (let i = 0; i < array.length; i++) {
//   if (array[i] === searchValue) {
//     console.log(`${searchValue} found at index ${i}`);
//     break;
//   }
// }

// for (let i = 0; i < 6; i++) {
//     if (i % 2 == 0) {
//       console.log(`${i} is an Even number. Skipping...`);
//       continue;
//     }
//     console.log(`${i} is an Odd number.`);
//   }


// 13. Write a function calculateTax that calculates and returns the tax amount based on a given income. Use a ternary operator to determine the tax rate.

// function calculateTax(income){
    
//     if (income >= 600000) {
//         console.log("Your tax is ",income *(5/100)) 
//     }
//     else{
//         console.log("not eligible")
//     }
// }
// calculateTax(4000000);

// Using Ternary Operator

// const calculateTax = (income) =>
//   income >= 600000
//     ? console.log("Your tax is ", income * (5 / 100))
//     : console.log("Not eligible");

// calculateTax(4000000);

// 14. Create an object car with properties make, model, and a method startEngine that logs a message. Instantiate the object and call the method.

const car = {
    make: "Toyota",
    model: "Camry",
    startEngine: function() {
      console.log("Engine started. Ready to drive!");
    }
  };
  
//call the method
  car.startEngine();

// 15. Explain the differences between regular functions and arrow functions in terms of scope, this binding, and their use as methods.
  

const person = {
    name: "Savera",
    regularMethod: function() {
      console.log(`Hello, I'm ${this.name}.`);
    },
    arrowMethod: () => {
      console.log(`Hello, I'm ${this.name}.`); // 'this' is not bound to 'person'
    }
  };
  
  person.regularMethod(); // 'this' is the 'person' object
  person.arrowMethod();   // 'this' is not bound to 'person', likely the global object or undefined
  
  let a = 1