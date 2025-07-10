// singleton

//object literals

const mySym = Symbol("key1");

const JsUser = {
    name: "Po",
    age: 18,
    [mySym]: "mySym",
    isActive: true,
    skills: ["HTML", "CSS", "JavaScript"],
    address: {
        city: "Bangalore",
        country: "India"
    },
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

// console.log(JsUser.name);
// console.log(JsUser['name']);
// console.log(JsUser[mySym]);

console.log(JsUser.greet());

Object.freeze(JsUser);

console.log(JsUser);