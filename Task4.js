'use strict'; // using strict mode .
const secret = 9; // declaring a constant variable(secret) with value = 9.
let input = prompt(`Guess the  secret number from 1-10: `); //granting input to user variable(input)
for (;input != secret;){ // running for loop (while the input is not the secret number)
    input = prompt(`Try again:`) // if true (Try Again) message will keep showing to user
    if(input == secret){ // after getting the additional attempt the condition will check again
        alert("Correct!") // if input matches secret (Correct!) message will be printed to user
        break; // using break to exit loop once user accomplished his guess.
    }
}