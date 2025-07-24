class User {
    constructor(email, age) {
        this.email = email;
        this.age = age;
    }

    get email(){
        return this._email.toUpperCase();
    }
    set email(newEmail) {
        this._email = newEmail;
    }
}

const po = new User("podw.com", 20);
console.log(po.email);