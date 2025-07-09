const myArray1 = [1,2,3,4,5];
const myArray2 = new Array(1,2,3,4,5);

console.log(myArray1);
console.log(myArray2);

console.log(typeof myArray1);
console.log(typeof myArray2);

const lotr = ["frodo","sam","gandalf","aragorn"];
const hp = ["harry","ron","hermione"];
const got = ["sansa","arya","brandon"];

const allChars = [...lotr,...hp,...got];
console.log(allChars);