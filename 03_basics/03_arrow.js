const user = {
    username: "Aman",
    price: 999,

    welcomeMsg: function(){
        console.log(`${this.username}, welcome to js.`);  // this refers to the current context
    }
}

// user.welcomeMsg()
// user.username = "sam"
// user.welcomeMsg()

// console.log(this);

// function one(){
//     let username = "Aman"
//     // console.log(this.username);  // does not work in functions, only in objects
// }
// one()

// const one = function () {
//     let username = "Aman"
//     console.log(this.username); 
// }
// one()                          // same as previous one funtion.



/*++++++++++++++++++++++Arrow Function+++++++++++++++++++++++++++++++*/

// const one = () => {
//     let username = "Aman"
//     console.log(this); 
// }
// one()    //this is an arrow function but the result with this will still same in this

const addTwo = (num1, num2) => { // Arrow function if {} then return keyword is mandatory - Also called exliplicit return
    return num1 + num2
}

const add = (num1, num2) => num1 + num2  // Called implicit return function
const add1 = (num1, num2) => (num1 + num2)  // inmplicit return function
const add2 = () => ({username: "Amandeep"})  // return an object

console.log(add2());
