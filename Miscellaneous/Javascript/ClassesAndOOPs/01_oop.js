const User = {
    username : "mantis",
    password : "1234",
    place : "Underground",
    online: true
}


function Users(username, password, place, online){
    this.username = username;
    this.password = password;
    this.place = place;
    this.online = online;

    return this;
}

const mantis = new Users("mantis", "1234", "Underground", true); // Without "new", "this" won't refer to a new object and may overwrite global scope.

console.log(mantis)