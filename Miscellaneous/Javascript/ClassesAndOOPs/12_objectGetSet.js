const User = {
    _email: "abc@gmail.com",
    _age: 25,

    get email() {
        return this._email.toUpperCase();
    },
    set email(newEmail) {
        this._email = newEmail;
    }
}

const po = Object.create(User);
console.log(po.email);