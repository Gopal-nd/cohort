
### Before the Object Oriented we use the Procedural programming

Procedural Programming is a programming paradigm that follows a step-by-step approach using procedures (functions) to organize and execute code. It is based on the concept of procedures (or routines) that perform specific tasks.

### classes and Objects 
1. objcets are entites (an entity is an independent concept that hash its own properties and behaviors,like a person,a place an idea)

2. class is like a blueprint of the entities 
 e.g :  schema of a person is class and actual person with the properties is objects 

### OOPs Pillers
1. encapsulation (reduce the no of parameters) -> This approach restricts external access to certain components of an object, promoting modularity and safeguarding data integrity.
```js
class Car {
  #engineStatus = false; // Private property

  startEngine() {
    this.#engineStatus = true;
    console.log('Engine started.');
  }

  stopEngine() {
    this.#engineStatus = false;
    console.log('Engine stopped.');
  }

  getEngineStatus() {
    return this.#engineStatus ? 'Engine is running.' : 'Engine is off.';
  }
}

const myCar = new Car();
myCar.startEngine(); // Output: Engine started.
console.log(myCar.getEngineStatus()); // Output: Engine is running.
myCar.stopEngine(); // Output: Engine stopped.
console.log(myCar.getEngineStatus()); // Output: Engine is off.


```
2.abstraction ->Abstraction focuses on exposing only the essential features of an object while hiding the complex details. This simplifies the interaction with objects by providing a clear and simplified interface

```js

class CoffeeMachine {
  #waterLevel = 0; // Private property

  fillWater(amount) {
    this.#waterLevel += amount;
    console.log(`Water level: ${this.#waterLevel}ml`);
  }

  makeCoffee() {
    if (this.#waterLevel > 0) {
      console.log('Making coffee...');
      this.#waterLevel -= 50;
    } else {
      console.log('Please add water.');
    }
  }

    cuurentWaterLevel(){
    console.log(`The current water level is ${this.waterLevel}ml`)
    }
}

const myCoffeeMachine = new CoffeeMachine();
myCoffeeMachine.fillWater(100); // Output: Water level: 100ml
myCoffeeMachine.makeCoffee(); // Output: Making coffee...
myCoffeeMachine.makeCoffee(); // Output: Making coffee...
myCoffeeMachine.makeCoffee(); // Output: Please add water.



```

3. inheritence -> Inheritance allows a class (subclass or child class) to acquire properties and methods from another class (superclass or parent class). This promotes code reusability and establishes hierarchical relationships between classes.


```js 

class Animal{
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(this.name,"make sound")
    }
}


class Dog extends Animal{
    speak(){
        console.log(this.name," barks")
    }
}


const myDog = new Dog('Buddy');
myDog.speak(); // Output: Buddy barks.

```

4. polymorphisam ->  Polymorphism enables objects of different classes to be treated as instances of the same class through a common interface. It allows methods to perform different tasks based on the object that invokes them.


```js 
class Shape {
  area() {
    console.log('Calculating area...');
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }
area() {
    return this.width * this.height;
  }

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius ** 2;
  }
}

const shapes = [new Rectangle(10, 5), new Circle(7)];

shapes.forEach((shape) => {
  console.log(shape.area());
});
// Output:
// 50
// 153.93804002589985




```


Encapsulation: Combining related data and methods within a single unit (class) to restrict external access and modification.

Abstraction: Simplifying complex systems by exposing only essential features and hiding implementation details.

Inheritance: Creating new classes that derive properties and behaviors from existing classes, promoting code reuse.

Polymorphism: Allowing objects to be treated as instances of their parent class, enabling a single interface to represent different underlying forms.


