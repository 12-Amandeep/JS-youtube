function one(){
    const username = "Aman"

    function two(){
        const website = "youtube"
        console.log(username);
    }

    // console.log(website);
    two()
}

// one()

if(true){
    const username = "Aman"
    if(username == "Aman"){
        const website = "youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

// ++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++ //
function addone(num){
    return num + 1
}

console.log(addone(5));


const addTwo = function(num){
    return num + 2
}

console.log(addTwo(5));
