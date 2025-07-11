// Immediately Invoked Function Expressions(IIFE)

(function letmeknow(){
    console.log(`Do you ....`);
})();

(() => {
    console.log(`Do you .........`);
})();

((name) => {
    console.log(`Hello ${name}`);
})("Qwerty")

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Avoid polluting the global scope

// Create private variables

// Encapsulate code logic