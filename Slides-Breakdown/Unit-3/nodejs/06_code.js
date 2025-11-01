/*

Nodejs -> REPL (Repeat-Eval-Print-Loop)



*/


setTimeout(()=>{
    console.log("Hello after 3 seconds");
}, 3000);

let count = 0;
const interval = setInterval(()=>{
    count++;
    console.log(`Hello every 2 seconds: ${count}`);
    if(count==5){
        clearInterval(interval);
    }
}, 2000);