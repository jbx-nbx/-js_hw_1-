'use strict';
const formal = 'ECMAScript'; // declaring permanent variable (formal) = 'ECMAScript'
let name = prompt(`What is the formal name of JavaScript?`) // declaring variable (name) and prompting user input
if(name == formal ) // condition term to check the user input if correct.
  alert("Correct!"); // if true alert function will engagge and present message "Correct!" to the user.
else alert("You actually don't know ? its: ECMAScript"); // if false alert function present a second message to the user.