const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

//console.log(descriptor);

//console.log(Math.floor(Math.PI));

const evilDead = {
    name : "Evil Dead",
    year : 1981,
    director : "Sam Raimi",
    rating : 7.5,
    isHorror : true
}

Object.defineProperty(evilDead, "name", {
    writable: false,
    configurable: false,
    enumerable: true
});

console.log(Object.getOwnPropertyDescriptor(evilDead, "name"));

for (let [key, value] of Object.entries(evilDead)) {
    if (typeof value !== "function"){
        console.log(`${key}: ${value}`);
    }
}



let getName = Object.getOwnPropertyDescriptor(evilDead, "name");
writeAccess = (getName) => getName.writable = !getName.writable;

writeAccess(getName);
//console.log(getName);