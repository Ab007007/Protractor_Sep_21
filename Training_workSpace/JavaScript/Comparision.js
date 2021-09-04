console.log("Comparision Operators");

let x = 200,y = 2, z= 100;
let p = "2"


console.log("Equal " + (x==y));
console.log("Equal with type " + (x===y));


console.log("Equal " + (x==p));
console.log("Equal with type " + (x===p));

console.log("Data type of x " + typeof(x));
console.log("Data type of p " + typeof(p));

console.log(" x is Greater than z ? " + (x>z));
console.log(" x is Less than z ? " + (x<z));

console.log("Ternary Operator " + ((x>z)?'x is greater ': 'z is greater '));