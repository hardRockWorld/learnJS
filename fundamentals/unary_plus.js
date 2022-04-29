// If the operand is not a number, it tries to convert it, 
// Otherwise if the operand is already a number, it does nothing
let x = 2;
console.log(+x);

let y = '2';
console.log(+y);

let z = '2a';
console.log(+z);

// output is:
// 2
// 2
// NaN