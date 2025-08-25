var ref = () => {
    // idk what he wrote
}

var rnd1 = 1 + Math.floor(Math.random()*99);
var rnd2 = 1 + Math.floor(Math.random()*77);

log = () => {
console.log(rnd1);
console.log(rnd2);
}

//setInterval(log, 5000); // Loop every 5s

setTimeout(log, 5000); // once time after 5s

// clearTimeout()