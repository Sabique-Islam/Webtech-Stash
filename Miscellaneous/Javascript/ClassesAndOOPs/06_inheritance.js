class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }
}

class Admin extends User{
    constructor(username, role){
        super(username);
        this.role = role;
    }
    logMe(){
        super.logMe();
        console.log(`Role: ${this.role}`);
    }
}

const crane = new Admin("crane", "admin");
crane.logMe();

const oogway = new User("oogway");
oogway.logMe();

console.log(crane instanceof Admin); // true
console.log(crane instanceof User); // true
console.log(oogway instanceof User); // true
console.log(oogway instanceof Admin); // false

console.log(crane.constructor === Admin); // true
console.log(oogway.constructor === User); // true

console.log(crane.__proto__ === Admin.prototype); // true
console.log(oogway === crane);