var courses = ["JS", "GOLANG", "HTML", "REACT"]

var emp = new function (fname, lname){
    this.fname = fname;
    this.lname = lname;
    this.showName = function(){
        console.log(this.fname + " " + this.lname);
    }
}
emp.fname = "PO"
emp.lname = "Momo"
emp.showName()

let greet = () => {
    return "Gang"
}

let greeet = function()  {
    return "Gang"
}

console.log(greet());

function test(name, age){
    this.name = name;
    this.age = age;
    console.log(arguments);
}

var test1 = new test("PO", 66)
test1