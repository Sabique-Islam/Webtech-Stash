const numbers = [1,2,3,4,5];

const squareNums = numbers.map((num) => {
    return num ** 2;
})

console.log(squareNums)

const newNum = numbers
            .map((num) => num*10)
            .map((num) => num+1)
            .filter((num) => num > 30);

console.log(newNum)