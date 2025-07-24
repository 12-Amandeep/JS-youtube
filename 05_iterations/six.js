// const coding = ["js", "java", "cpp", "python"]


// const code = coding.forEach((item) => {
//     console.log(item);
//     return item                        // for each doesn't returns any value so the value in code will be undefined.
// })

// console.log(code);

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//// Filter ////

const num = nums.filter( (i) => i > 4);

// console.log(num);

//same using foreach 

const newnum = [];

nums.forEach((item) => {
    if(item > 4){
        newnum.push(item);
    }
})

console.log(newnum);

