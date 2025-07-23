class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

const chai = new User("po", "po@gmail.com", "123")

console.log(chai.encryptPassword());
console.log(chai.changeUsername());

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("mantis", "mantis@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());