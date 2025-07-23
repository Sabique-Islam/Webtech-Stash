function setUsername(username) {
  this.username = username;
}

function createUser(username, email, password){
    //setUsername(username);
    setUsername.call(this, username);
    this.email = email;
    this.password = password;
}

const po = new createUser('po', 'po@gmail.com', '12345');

console.log(po)