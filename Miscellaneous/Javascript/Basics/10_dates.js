//console.log(Temporal.Now.instant())

let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toJSON());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);


console.log(myDate.getDay());

console.log(myDate.toLocaleString('default',{
    weekday:"long"
}));