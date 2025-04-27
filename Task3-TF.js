'use strict'; // using strict mode to avoid occuring errors.
let score = 75; // declaring variable score = 75
let grade; // declaring variable grade

grade=(score >= 90) ? "A" // beggining of several ternary conditions 1st.if true grade="A"
:(score >= 80) ? "B" // if true grade="B"
:(score >= 70) ? "C" // if true grade="C"
:(score >= 60) ? "D" // if true grade "D"
:"F"; // else if true grade="D" . The End of ternary condition.

console.log("Grade Result: "+grade); // console.log command to print the result in console.
