//for each loop

const coding = ["js", "java", "cpp", "python"]

// coding.forEach(function (i) {
//     console.log(i);
    
// })

// coding.forEach((i) => {
//     console.log(i);
// })

// function printItem(i){
//     console.log(i);
    
// }

// coding.forEach(printItem)

coding.forEach((i, index, arr) => {
    console.log(i, index, arr);
})