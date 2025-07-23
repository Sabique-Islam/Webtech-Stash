// let name = "Po     ";

// console.log(name.trueLength);

// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spiderman power -> ${this.spiderman}`);
    }
}

Object.prototype.po = function(){
    console.log(`po is present in all objects`);
}

Array.prototype.heyPo = function(){
    console.log(`Po says hello`);
}

// heroPower.po()
// myHeros.po()
// myHeros.heyPo()
// heroPower.heyPo()

// inheritance

const User = {
    name: "kungfu",
    email: "kungfu@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

/////////////////////////////////////////////////////////////////////////

let anotherUsername = "Mantis     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"po".trueLength()
"iceTea".trueLength()