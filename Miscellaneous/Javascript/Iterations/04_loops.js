const arr = [1,2,3,4,5];

for (const num of arr){
    console.log(num);
}

const lang = {
    js:"javascript",
    py:"python",
    cpp:"c++",
    java:"java"
}

// for (const [key, value] in lang) {
//     console.log(`${key}: ${value}`);
// }

for (const key in lang) {
    console.log(key);
    console.log(lang[key])
};


const code = ["js","py","cpp","java"];

code.forEach( function (item) {
    console.log(item);
})

code.forEach((item, index, arr) => {
    console.log(item, index, arr);
})

