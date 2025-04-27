console.log(false || 'sdf'); // true - explination: 'sdf' is not an empty string and its true.
console.log(false && ''); // false - explination: false && another value is false.
console.log(true || ''); // true - explination: true || another value is true.
console.log(true && ''); // false - explination: '' is an empty string and its false.
console.log(undefined || null); // false - explination: both are false values.
console.log(undefined || 0 || null); // false - explination: 3 values are false.
console.log(undefined && 0 && null); // false - explination: 3 values are false as well.
console.log(1 || 0); // true - explination: 1 or 0 results in 1 as simple as is. 
console.log(null || 1); // true - explination: null=false , false or 1 is true. 
console.log(null || 0 || 1); // true - explination: false or false or true is true. 

/*
there are many specific set of  False Values in JavaScript and i will mention them:-
1- (false).
2- (0)  as in bolean algebra and as binary digit that means no power..
3- (-0)
4- ("") empty string is considered negative/false.
5- (null)
6- (undefined)
7- (NaN) Not a Number.
** Any other values other than those mentioned above is considered to be true**
*/