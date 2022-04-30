// JavaScript offers a few ways to map this to any object you want.

// 1. Using bind() , at the function declaration step:
const car = {
  maker: "Ford",
  model: "Fiesta",
};

const drive = function () {
  console.log(`Driving a ${this.maker} ${this.model} car!`);
}.bind(car);

drive();

// You can also bind an existing object method to remap its this value:
const truck = {
  maker: "Tata",
  model: "Truckie",

  drive() {
    console.log(`Driving a ${this.maker} ${this.model} truck!`);
  },
};

const anotherTruck = {
  maker: "Mercedez",
  model: "M22",
};

truck.drive.bind(anotherTruck)();

// Using call() or apply() , at the function calling step:
// The first parameter you pass to call() or apply() is always bound to 'this'
const bus = {
  maker: "Mercedez",
  model: "Fire",
};

const driving = function (kmh) {
  console.log(`Driving a ${this.maker} ${this.model} bus at ${kmh} km/h!`);
};

driving.call(bus, 100);
driving.apply(bus, [100]);
