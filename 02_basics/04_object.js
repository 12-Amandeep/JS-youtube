// const tinderUser = new Object();     //Singelton object
const tinderUser = {}                //Non - Singelton object;

tinderUser.id = "123abc"
tinderUser.name = "Alice"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularuser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Alice",
            lastname: "Bob"
        }
    }
}

// console.log(regularuser);
// console.log(regularuser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b", 3: "c"}
const obj2 = {4: "d", 5: "e", 6: "f"}

// const obj3 = {obj1, obj2} // not good
// const obj3 = Object.assign(obj1, obj2)  // all the values are going in obj1
// const obj3 = Object.assign({}, obj1, obj2)  // A new object is returned but less use
// const obj3 = {...obj1, ...obj2} //spread operator - widely used
// console.log(obj3);

/*****************************when values comes from the database************************************/
// comes in the form of array of objects. for e.g.-

const users = [
    {
        id: 1,
        name: "a"
    },
    {
        id: 2,
        name: "b"
    },
    {
        id: 3,
        name: "c"
    }
]

// console.log(users[1].name)

// console.log(tinderUser);

// returns in the form of array
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('name'));

// Destructuring

const course = {
    coursename: "js",
    price: "999",
    courseInstructor: "Hitesh"
}

// course.courseInstructor

// const {courseInstructor} = course
// console.log(courseInstructor);

// const {courseInstructor: instructor} = course
// console.log(instructor);

