// 1.Create a variable called carName, assign the value Volvo to it.

// let carname="Volvo"
// console.log(carname)


// 2.On one single line, declare three variables with the following names and values:
// let firstName = "John";
// let lastName = "Doe";
// let age = 35;


// 3.Use the correct assignment operator that will result in x being 50 (same as x = x * y).

// x = 10;
// y = 5;
// x = x*y

// console.log(x)


4// Use comments to describe the correct data type of the following variables:

// let length = 16; // data type ? 
// let lastName = "Johnson"; // data type ? 

// const x = {
//   firstName: "John",  
//   lastName: "Doe"
// };

// console.log(typeof "lenght");
// console.log(typeof "lastname");
// console.log(typeof "x")


// 5.Execute the function named myFunction.

//  function myFunction (){
//     alert("hello world")
//  }

// myFunction ()

// 6.Create an object called person with name = John, age = 50, Then, access the object to alert("John is 50").

// alert("johin age is 50")

// // 7.The <button> element should do something when someone clicks on it. Try to fix it!

// function mybutton(){
//     document.getElementById("demo").innerHTML="changed the paragraph"
    
// }

// function alt(){
//     alert("welcome");

// }


// 8.2. Change the first item of Brand to "Ford".

const cars = ["Volvo", "Jeep", "Mercedes"];
 cars [0]="Ford"
console.log(cars)

// 9.1. Use the correct Math method to create a random number.

// 2. Use the correct Math method to return the largest number of 10 and 20.

// 3. Use the correct Math method to get the square root of 9.


const randomNumber = Math.random();
console.log(randomNumber)

const largestnum= Math.max(10,20);
console.log(largestnum)


const squareRoot = Math.sqrt(9);

console.log(squareRoot)



10.  // 1. Choose the correct comparison operator to alert true, when x is greater than y. 

// x = 10;
// y = 50;

// if(x > y){
//     alert("x is greater than y")
// }
// else{
//     alert("y is greater than x")
// }




// 2. Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough".


const age = 2;

if(age>18){
    alert("Old enough")
}

else{
    alert("Too young")
}

