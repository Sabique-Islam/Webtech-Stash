// var emp1 = {
//     "fname" : "Ayush",
//     "lname" : "Bhat",
//     "showName": function() {
//         console.log(`${this.fname} ${this.lname}`)
//         alert(`${this.fname} ${this.lname}`)
//     }
// }

// emp1.showName()

function Employee(fname, lname) {
    this.fname = fname;
    this.lname = lname;
    this.showName = function(){
        alert(`Welcome, ${this.fname} ${this.lname}!`)
    }
};

emp1 = new Employee("My", "Dude");
emp2 = new Employee("My2", "Dude2");
emp3 = new Employee("My3", "Dude3");
emp1.showName();                                                                                            
emp2.showName();                                                                                            
emp3.showName();                                                                                            