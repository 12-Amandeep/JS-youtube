const arr1 = ["abs", "asj", "edf"];
const arr2 = ["vgg", "fdo", "rhr"];

// arr1.push(arr2);
// console.log(arr1);
// console.log(arr1[3][1]);

// console.log(arr1.concat(arr2));

/********************* spread operator *************************/

// const new_arr = [...arr1, ...arr2];
// console.log(new_arr);

/****************************************************************/

// const new_arr = [1, 3, 4, 2, [3, 6, 7], 4, 6, 7, 8,[9, 0, [5, 6]]];
// console.log(new_arr.flat(Infinity));
// console.log(new_arr.flat(2));

// console.log(Array.isArray("Aman"));
// console.log(Array.from("Aman"));
// console.log(Array.from({name :"Aman"}));

let a = 320
let b = 400
let c = 200

const new_arr = (Array.of(a, b, c))
console.log(new_arr);
