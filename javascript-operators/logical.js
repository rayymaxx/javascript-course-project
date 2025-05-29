/*
// or operator(||)

// console.log(true || true); // true
// console.log(false || true ); // true
// console.log(true || false); // true
// console.log(false || false) // false

let hasReservation = true;
let acceptingWalkIns = false;

const hasAccessToTable = hasReservation || acceptingWalkIns;

console.log(hasAccessToTable);
*/


/* 
//And operator:

// console.log(true && true) // true
// console.log(false && true) // false
// console.log(true && false) // false
// console.log(false && false) //false

let age = 16;
let hasCar = true;

const canDrive = age >= 16 && hasCar;
console.log(canDrive);



let a = true, b = true, c = true, d = true;

//using && has a higher preference as it is evaluated first
console.log(a && b || c && d);
console.log((a && b) || (c && d));

*/

/*
let isClosedOnSunday = true;
const isRestaurantOpen = !isClosedOnSunday;
console.log(isRestaurantOpen);
*/

let a = null;
const result = a ?? false;

console.log(result);

let a = null;
const result = (a !== null && a !== undefined) ? a : false;

console.log(result)
