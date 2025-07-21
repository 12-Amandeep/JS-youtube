// Always assumed to be true

const userEmail = "a@gmail.com"

// if(userEmail){
//     console.log("Got the user email");
// }else{
//     console.log("Do not have email");
// }


/**********************************Falsy Values**************************************/
// false, 0, -0, BigInt 0n, "", null, undefined, NaN   

/***********************************Truthy values*************************************/
// The rest of all are truthy values. Some special are:  "0", '0', 'false', " ", [], {}, function() {}


if(userEmail.length == 0){
    console.log("String/ Array is empty.");
}

const emptyObject = {}

if(Object.keys(emptyObject).length === 0){
    console.log("Object is empty");
}

//nullish coalescing operator(??) : null, undefined
//safety check of null and undefined values.

let val1;
// val1 = 5 ?? 10 ---> 5
// val1 = null ?? 10 ---> 10
// val1 = undefined ?? 10 ---> 10

console.log(val1);


// terniary operator

condition ? true : false;
