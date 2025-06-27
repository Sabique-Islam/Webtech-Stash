const accountId = 107 // can't be reassigned (var : Issues in block and functional scope)
let email = "agent007@gmail.com" // can be reassigned 
var accountPassword = "12345" // can be reassigned
accountCity = "New York" // can be reassigned

let accountState // undefined

console.table([accountId, email, accountPassword, accountCity, accountState])
