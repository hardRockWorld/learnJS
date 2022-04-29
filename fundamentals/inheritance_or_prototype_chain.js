class Truck {};

class Buzz extends Truck {};

const myTruck = new Buzz();
console.log(myTruck instanceof Buzz);
console.log(myTruck instanceof Truck); 

class Bike {
  constructor() {
    this.wheels = 2;
  };  
};

class Shine extends Bike {
    constructor() {
        super();
        this.brand = 'Honda';
    };
};

const myBike = new Shine();
console.log('brand' in myBike);
console.log('wheels' in myBike);