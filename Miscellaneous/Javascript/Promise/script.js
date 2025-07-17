const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("async task complete");
        resolve() // connects resolve to then
    }, 1000)
})

promiseOne.then(() => {
    console.log("Promise consumed");
}).catch(() => {
    console.log("Promise not consumed");
})

const promises = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username: "po", password: "youAreApanda"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promises.then((user) => {
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("Promise is either resolved or rejected");
})

const promisss = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromisss() {
    try {
        const response = await promisss;
        console.log(response);
    } catch (error) {
        console.log(error);
    } finally {
        console.log("Promise is either resolved or rejected");
    }
}

consumePromisss()

async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers();

///////////////////////////////////////////////////////////////////////////

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("E:", error);
  });