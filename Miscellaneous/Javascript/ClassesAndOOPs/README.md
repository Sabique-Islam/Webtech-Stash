
---

# Parts of OOP

### 1. Constructor Function

Used to create and initialize new objects.

```js
function Car(make, model) {
    this.make = make;
    this.model = model;
}
```

➤ Called with `new`

➤ `this` refers to the object being created

➤ Sets up properties for that instance

---

### 2. Prototypes

Prototype is an object every function has, used for method sharing.

```js
Car.prototype.drive = function() {
    console.log(this.make + " is driving");
};
```

➤ Methods on the prototype are shared by all instances

➤ Saves memory compared to defining methods inside the constructor

➤ Enables inheritance in JavaScript

---

### 3. Classes

Modern syntax introduced in ES6 for writing constructors and prototypes.

```js
class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    drive() {
        console.log(this.make + " is driving");
    }
}
```

➤ Cleaner syntax for object blueprints

➤ Still uses prototypes under the hood

➤ Supports inheritance via `extends` keyword

---

### 4. Instances (`new`, `this`)

Instances are actual objects created from a class or constructor.

```js
const myCar = new Car("Toyota", "Corolla");
```

➤ `new` creates a new object

➤ `this` binds properties inside constructor to that object

➤ The object gets access to prototype methods

---

# The Four Pillars of OOP

### 1. Abstraction

Hiding unnecessary implementation details, showing only essential features.

➤ Example: Using `.map()` on an array without knowing the internals

➤ Focus on what the object does, not how

---

### 2. Encapsulation

Wrapping data and related methods together; restricting direct access.

```js
class BankAccount {
    #balance = 0;

    deposit(amount) {
        this.#balance += amount;
    }

    getBalance() {
        return this.#balance;
    }
}
```

➤ `#balance` is private

➤ Accessed only through methods

➤ Prevents accidental or unauthorized changes

---

### 3. Inheritance

Creating new classes based on existing ones.

```js
class Animal {
    speak() {
        console.log("Animal sound");
    }
}

class Dog extends Animal {
    speak() {
        console.log("Bark");
    }
}
```

➤ `Dog` inherits `speak()` from `Animal`

➤ Can override or extend behavior

➤ Promotes code reuse

---

### 4. Polymorphism

Same interface, different implementations.

```js
function makeItSpeak(obj) {
    obj.speak();
}
```

➤ `makeItSpeak()` works with any object that has `speak()`

➤ Each object responds differently

➤ Enables flexibility and scalability

---