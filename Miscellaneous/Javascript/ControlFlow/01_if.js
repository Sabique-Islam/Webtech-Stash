const score = 200

if (score > 100){
    let power = "super"
    console.log(power)
}else if (score < 100){
    power = "weak"
}else{
    power = "normal"
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("Allowed");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}