//Exercise by ajinkya sir
//Using reduce, provide the result of multiplication of all elements in an array.
let multiply = [1, 2, 3, 4]; // 24 
 multiply = [1, 2, 3, 4];

const result = multiply.reduce((accumulator, currentValue) => accumulator * currentValue);

console.log(result); // Output: 24
