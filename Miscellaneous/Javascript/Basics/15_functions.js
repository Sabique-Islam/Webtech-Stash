function hello(){
    console.log("Hello World");
}

//hello();

function add(a, b) {
    return a+b
}

//console.log(add(3,5));

function isLoggedIn(name){  // (name = "frodo")
    if(!name){
        return `Name is required`;
    }
    return `${name} is logged in`
}

// const res = isLoggedIn("Po");
// console.log(res);
console.log(isLoggedIn()); // undefined is logged in