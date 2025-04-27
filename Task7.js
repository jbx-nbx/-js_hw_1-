let j=0;
while(j++ < 5)
console.log(j);
/* OUTPUT :  1 2 3 4 5 -  the promoting operator (increment) post to 
the condition comparison it increments after the condition comparison. */

let i=0;
while(++i < 5)
console.log(i);
/* OUTPUT : 1 2 3 4 - the promoting operator (increment) prior to the condition comparison and
it increments with +1 ahead of its current value . */