'use strict'; // using strict mode to avoid any errors.
let num = prompt(`Enter a number:`); // declaring variable num as input from user through prompting him input. 
if (num>0){ // 1st condition term : if num greater than 0 .
  alert("1"); // if true -  alert message to user:"1"
}else if(num<0){// 2nd condition term  : if num less than 0.
  alert("-1");// alert message to user:"-1"
}else alert("0");// the else is the last option we have that num==0 - alert message to user:"0".