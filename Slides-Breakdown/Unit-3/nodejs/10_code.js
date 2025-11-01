const person = {
    name : "Gigi",
    age : 25,
    address : "Earth"
}

function doSmthg(){
    return JSON.stringify(person);
}

function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

function mul(a,b){
    return a*b;
}

function div(a,b){
    return a/b;
}

module.exports = { doSmthg, add, sub, mul, div };