//singleton - made with constructors only

//object Literals
const sym = Symbol("key1");

const jsUser = {
    name: "Aman",
    age: 18,
    [sym]: "mykey",
    email: "aman@google.com",
    isLoggedIn: false,
    days: ["sun", "mon", "tue"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser[sym]);
// console.log(typeof jsUser["sym"]);

// jsUser.email = "aman@gmail.com"
// console.log(jsUser["email"]);
// Object.freeze(jsUser)
// jsUser.email = "aman@gmail.com"
// console.log(jsUser["email"])

jsUser.greetings =  function(){
    console.log("Hello, users");
}

jsUser.greetings2 =  function(){
    console.log(`Hello, ${this.name}`);
}

console.log(jsUser.greetings());
console.log(jsUser.greetings2());
