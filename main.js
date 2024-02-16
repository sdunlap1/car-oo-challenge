//Part One
class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  honk() {
    return "Beep";
  }
  toString() {
    return `The vehicle is a ${this.make} ${this.model} from ${this.year}`;
  }
}

let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
console.log(myFirstVehicle.honk());

//Part Two
class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 4;
  }
}

let myFirstCar = new Car("Toyota", "Corolla", 2005);
console.log(myFirstCar.toString());
console.log(myFirstCar.honk());
console.log(myFirstCar.numWheels);

//Part Three
class Motorcycle extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 2;
  }
  rev() {
    return "VROOM!!!";
  }
}

let myFirstMotorCycle = new Motorcycle("Honda", "Nightwing", 2000);
console.log(myFirstMotorCycle.toString());
console.log(myFirstMotorCycle.honk());
console.log(myFirstMotorCycle.numWheels);
console.log(myFirstMotorCycle.rev());

//Part Four
class Garage {
  constructor(capacity) {
    this.vehicles = [];
    this.capacity = capacity;
  }
  add(vehicle) {
    if (this.vehicles.length >= this.capacity) {
      return "Sorry, we're full";
    }
    if (vehicle instanceof Vehicle) {
      this.vehicles.push(vehicle);
      return "Vehicle added!";
    } else {
      return "Only vehilces are allowed in here!";
    }
  }
}
let garage = new Garage(2);
console.log(garage.add(new Car("Hyundai", "Elantra", 2015)));
console.log(garage.add("Taco"));
console.log(garage.add(new Motorcycle("Honda", "Nighthawk", 2000)));
console.log(garage.add(new Motorcycle("Honda", "Nighthawk", 2000)));
