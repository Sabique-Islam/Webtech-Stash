// ARRAY

function greet(){
    return "Gang"
}

let fullstack = ["frontend", "backend", "in the end"];

let arr = [];
arr[0] = Date.now(); // Returns the number of milliseconds elapsed since midnight, January 1, 1970 Universal Coordinated Time (UTC)
arr[1] = greet();
arr[2] = fullstack;
arr[3] = Math.PI;

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2][2]);
console.log(Math.floor(arr[3]));
