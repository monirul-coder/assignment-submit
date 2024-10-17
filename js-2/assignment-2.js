// 1/Write a function to convert Celsius to Fahrenheit. The function should take a single argument, which is the temperature in Celsius.


// function celsiusToFahrenheit(celsius) {
//     return (celsius * 9/5) + 32;
// }

// console.log(celsiusToFahrenheit(0));  // 32
// console.log(celsiusToFahrenheit(25)); // 77


// 2.Write a function to check if a number is even. The function should take a single argument, which is the number to check.

// function isEven(num) {
//     return ( num % 2 ===0);
//   }
  
//   console.log(isEven(4)); // true
//   console.log(isEven(7)); // false


//   3.Write a function to sum two numbers. The function should take two arguments, which are the numbers to sum.

// function sum(a, b) {
//     return a+b;
//   }
  
//   console.log(sum(3, 4)); // 7
//   console.log(sum(10, 20)); // 30

//4 Write a function to find the smallest number in an array. The function should take a single argument, which is the array to search.

// function findSmallestNum(arr) {
//   return Math.min(...arr);
// }

// console.log(findSmallestNum([3, 5, 1, 9])); // 1
// console.log(findSmallestNum([-1, -5, 0, 10])); // -5


// function countVowels(str) {
//   let vowels = 'aeiouAEIOU';
//   return Array.from(str).reduce((count, char) => {
//     return count + (vowels.includes(char) ? 1 : 0);
//   }, 0);
// }

// console.log(countVowels("hello world")); // 3
// console.log(countVowels("Javascript")); // 3


// 6.Write a function to get the first element of an array. The function should take a single argument, which is the array.
// function getFirstElement(arr) {
//   return arr[0];
// }

// console.log(getFirstElement([1, 2, 3])); // 1
// console.log(getFirstElement(["a", "b", "c"])); // "a"

// 7.Write a function to check if an array is empty. The function should take a single argument, which is the array.

// function isArrayEmpty(arr) {
//   return  arr.length === "";
// }

// console.log(isArrayEmpty([])); // true
// console.log(isArrayEmpty([1, 2, 3])); // false


// 8.Write a function to return the factorial of a number. The function should take a single argument, which is the number.

// function factorialize(num) {
//   if (num === 0 || num === 1) return 1;
//   return num * factorialize(num - 1);
// }

// console.log(factorialize(5)); // 120
// console.log(factorialize(7)); // 5040

// 9.Write a function to reverse a string. The function should take a single argument, which is the string to reverse.

// 

// function reverseString(str) {
//   return str.split('').reverse().join('');
// }

// console.log(reverseString("hello")); // "olleh"
// console.log(reverseString("JavaScript")); // "tpircSavaJ"



 10.Write a function to convert a string to lowercase. The function should take a single argument, which is the string to convert.
// function toLowerCase(str) {
  return str.toLowerCase();
}

 console.log(toLowerCase("HELLO WORLD")); // "hello world"
 console.log(toLowerCase("JavaScript")); // "javascript"



