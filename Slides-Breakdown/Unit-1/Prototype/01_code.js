function Car(make, model, year, owner){
    this.make = make;
    this.model = model;
    this.year = year;
    this.owner = owner;

    Car.prototype.showDetails = function() {
        console.log("Car Details:");
        console.log("Make: " + this.make);
        console.log("Model: " + this.model);
        console.log("Year: " + this.year);
        console.log("Owner: " + this.owner);
    };

    Car.gang = function(){
        return `${this.make} ${this.model} ${this.year} ${this.owner} ${this.color}`;
    }
}

// var car1 = new Car("Toyota", "Camry", 2020, "Alice");
// car1.color = "blue";
// console.log("Car Color: " + car1.color);
// car1.showDetails();

// var car2 = new Car("Honda", "Civic", 2020, "Bob");
// car2.color = "red";
// console.log("Car Color: " + car2.color);
// car2.showDetails();

// console.log(Car.gang.call(car2));


function Person(first, last, age, eye){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
Person.prototype.name = function() {
    document.write(this.firstName + " " + this.lastName);
};

var p1 = new Person("John", "Doe", 30, "blue");
p1.name();
