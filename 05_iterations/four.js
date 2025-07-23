//for in loop

const myObject = {
    js: 'Javascript',
    cpp: 'c plus plus',
    py: 'python'
}

// for (const key in myObject) {
//     console.log(key); // only print keys
//     console.log(myObject[key]); // only prints values of key.
// }

const arr = [1, 2, 3, 4, 5]
for(const num in arr){
    console.log(arr[num]);
}


//map is not iteratable by for in