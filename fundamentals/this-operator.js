const car = {
    maker: 'Ford',
    model: 'Fiesta',
  
    drive() {
      console.log(`Driving a ${this.maker} ${this.model} car!`)
    }
  }

car.drive()

// the same above code can be written as:
const bus = {
    maker: 'Ford',
    model: 'Bussie',
  
    drive: function() {
      console.log(`Driving a ${this.maker} ${this.model} bus!`)
    }
  }

bus.drive()

// the same code above can be written in this way:
const truck = {
    maker: 'Tata',
    model: 'Truckie'
}

truck.drive = function() {
    console.log(`Driving a ${this.maker} ${this.model} truck!`)
}

truck.drive()

// Now, let us see how the arror function works: this returns undefined
const bike = {
    maker: 'Honda',
    model: 'Unicorn',
  
    drive: () => {
      console.log(`Driving a ${this.maker} ${this.model} bike!`)
    }
  }
  
bike.drive()