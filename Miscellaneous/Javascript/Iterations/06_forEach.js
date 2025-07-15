// const lang = ["cpp", "js", "java", "py"]


// const progLang = lang.forEach( (item) => {
//     console.log(item);
//     return item;
// })

// console.log(progLang);

const nums = [1,2,3,4,5,6,7,8,9,10];

// const evenNums = nums.filter((num) => num % 2 == 0 )

const evenNums = nums.filter((num) => {
    return num%2 == 0;
})
console.log(evenNums)


const newNums = [];

nums.forEach((num) => {
    if (num%2 == 0){
        newNums.push(num);
    }
})

console.log(newNums)