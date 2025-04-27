let userInput; // declaring variable userInput.
let number; // declaring variable number.

do {
  userInput = prompt("Please enter a positive number:"); // userInput will get it's value from user
  if(userInput>0) // if userInput is greater than 0.
  number=userInput; // number variable will copy userInput value. 
} while (isNaN(number) || number <= 0);
/* while loop term to keep the (do) running while: userInput is a negative number OR
Not a Number. */ 

console.log("The valid positive number you entered is:", number);
/* once the userInput is the valid input (positive number)- the number is printed in
console log . */