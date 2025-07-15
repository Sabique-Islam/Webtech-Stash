const Nums = [1,2,3,4,5]

// const Total = Nums.reduce(function (accumulator, currentValue) {
//     console.log(`Current Value -> ${currentValue} ------ Accumulator Value -> ${accumulator}`);
//     return accumulator + currentValue;
// }, 0)

const Total = Nums.reduce((accumulator, currentValue) => accumulator+currentValue ,0)
console.log(Total)