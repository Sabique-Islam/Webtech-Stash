//const user = {}

const user = new Object
user.id = "1234"
user.name = "Po"
user.isActive = true

//console.log(user);

const dataEntry = {
    id: "123abc",
    name: "Data Entry",
    isActive: true,
    details: {
        email: "po@kungfu.com",
        password: "123456",
        role: "Unemployed"
    }
}

//console.log(Object.values(dataEntry));
//console.log(Object.keys(dataEntry));
console.log(Object.entries(dataEntry));
console.log(dataEntry.hasOwnProperty("isActive"));

//console.log(dataEntry["details"]["email"])

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 = {...obj1, ...obj2}

//console.log(obj3);

//const obj4 = Object.assign(obj1, obj2) // obj2's properties are copied into obj1, overwriting existing ones if keys match.

const obj4 = Object.assign({}, obj1, obj2) // Copies all properties from obj1 and obj2 into a new empty object.
//console.log(obj4)