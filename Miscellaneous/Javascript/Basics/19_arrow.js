const user = {
    username : "PO",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website.`) // this : current context
    }
}

//user.welcomeMessage()

user.username = "Mantis"
//user.welcomeMessage()

//console.log(this)

// const damn = function(){
//     let username = "Poo"
//     console.log(this.username)
// }

// damn()

const damn = () =>{
    let username = "Poo"
    console.log(this)
}

damn()

//const add = (num1, num2) => num1 + num2
//const add = (num1, num2) => (num1 + num2)
const add = (num1, num2) =>{
    return num1 + num2
}

console.log(add(3,9))