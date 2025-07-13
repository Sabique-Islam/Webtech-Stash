const userEmail = "po@kungfu.com"

if (userEmail) {
    console.log("Got it");
}else{
    console.log("No email provided");
}

/*

Falsy values ->

* false
* 0
* -0
* ""
* null
* undefined
* NaN
* BigInt
* 0n

Truthy values ->

* true
* "false"
* "0"
* []
* {}
* function(){}

*/

const emptyObj = {}

if (Object.keys(emptyObj).length === 0){
    console.log("Empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = null ?? 10
console.log(val1);


// Terniary Operator (condition ? true : false)

const cost = 6500;
cost > 5000 ? console.log("Cost is greater than 5000") : console.log("Cost is less than 5000");