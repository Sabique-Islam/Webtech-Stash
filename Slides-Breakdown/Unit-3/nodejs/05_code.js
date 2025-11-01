let str = "       U confuse probability with possibility confuse      "
console.log(str.indexOf("conf"));
console.log(str.lastIndexOf("confuse"));
console.log(str.includes("gang"))
console.log(str.substring(0, 6));
console.log(str.substring(2));
console.log(`Before trim -> ${str}`);
console.log(`After trim -> ${str.trim()}`);
console.log(str.replace("possibility", "certainty"));