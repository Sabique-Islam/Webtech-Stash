class User {
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `${this.username}-${Math.floor(Math.random() * 1000)}`;
    }
}

const crane = new User("crane");
crane.logMe();
console.log(crane.createId());