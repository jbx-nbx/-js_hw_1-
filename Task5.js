'use strict'; // using strict mode 
for(let i=1; i<=30; i++){ // for loop term:  running from 1 to 30. +1 each eteration.
    if(i%3==0) continue; // continue command - if condition true  will skip all commands in current eteration
    console.log(i+" ") // the alert command will be engagged once the condition is false.
}

/* to summarize this program way of working :
program will always skip printing Numbers that divisble by 3 and has no remainder.
*/