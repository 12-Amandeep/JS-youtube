//Reduce

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const mynums = nums.reduce(function (acc, currval) {
    return acc + currval
}, 0)

console.log(mynums);
