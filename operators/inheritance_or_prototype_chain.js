class Car {};

class Fiesta extends Car {};

const myCar = new Fiesta();
console.log(myCar instanceof Fiesta);   // returns true
console.log(myCar instanceof Car);      // returns true

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