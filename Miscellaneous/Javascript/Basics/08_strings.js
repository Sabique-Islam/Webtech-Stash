const hotel = "Trivago"
const coords = 175.67

console.log(`${hotel.toUpperCase()} is in ${coords}°`) // string interpolation

const gameName = new String("Wuthering Waves") // string object
console.log(typeof gameName) // object
console.log(gameName[0])
console.log(gameName.__proto__) // {}

url = "https://www.trivago.com/book%20hotel"
console.log(url.replace("%20","-"))