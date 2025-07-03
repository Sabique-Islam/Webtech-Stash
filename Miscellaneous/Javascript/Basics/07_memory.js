/*

-> Stack (Primitive)
-> Heap (Non-Primitive)

*/

let name1 = "Ryan Gasoline"

let name2 = name1
name2 = "Henrie Civil"

console.log("Name1-> "+name1)
console.log("Name2-> "+name2)


let userOne = {
    name : "Ryan Gasoline",
    age : 25
}

let userTwo = userOne

userTwo.age = 30

console.log(userOne.name)
console.log(userOne.age)