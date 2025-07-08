const balance = new Number(100);
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2));
console.log(balance.toPrecision(2)); // lmao

console.log(Math);
console.log(Math.PI);
console.log(Math.E);
// console.log(Math.round(2.5));
// console.log(Math.ceil(2.1));
// console.log(Math.floor(2.9));
// console.log(Math.trunc(2.9));
// console.log(Math.random());
// console.log(Math.random() * 10);
// console.log(Math.random() * 100);
// console.log(Math.round(Math.random() * 100));


console.log(Math.floor(Math.random()*10)+1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max-min+1)) + min);