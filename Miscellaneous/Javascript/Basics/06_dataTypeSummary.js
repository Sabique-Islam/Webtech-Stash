/*

Primitive => (7)

1. String
2. Number
3. Boolean
4. undefined
5. null
6. Symbol
7. BigInt

Non-primitive (Reference) => (3)

1. Object
2. Function
3. Array

*/

const id1 = Symbol("123")
const id2 = Symbol("123")

console.log(id1===id2)
console.log(id1==id2)
console.log(id1)
console.log(id2)