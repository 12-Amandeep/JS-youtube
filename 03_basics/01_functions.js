function sayMyName(){
    console.log("Reenu");
    console.log("Aman");
}

// sayMyName()

function addTwoNum(num1, num2){
    let res = num1 + num2

    return res
}

const result = addTwoNum(3, 6)
// console.log(result);

function loginUser(username){
    return `${username} just logged in.`
}

// console.log(loginUser("Aman"));

// function calculateCartprice(num1){
//     return num1
// }
// console.log(calculateCartprice(3));

// function calculateCartprice(...num1){
//     return num1
// }
// console.log(calculateCartprice(300, 200, 560));

const user = {
    name: "Aman",
    price: 999
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.name} and price is ${anyObject.price}`);
}

// handleObject(user);
handleObject({
    user: "Reenu",
    price: 100000
})