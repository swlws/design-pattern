//
// 装饰器
//

// 定义一个基础类
class Car {
  constructor() {
    this.description = "Unknown Car";
    this.cost = 0;
  }

  getDescription() {
    return this.description;
  }

  getCost() {
    return this.cost;
  }
}

// 定义装饰器类
class CarDecorator {
  constructor(car) {
    this.car = car;
  }

  getDescription() {
    return this.car.getDescription();
  }

  getCost() {
    return this.car.getCost();
  }
}

// 定义具体的装饰器类
class AirConditionedCar extends CarDecorator {
  constructor(car) {
    super(car);
    this.description = car.getDescription() + ", Air Conditioned";
    this.cost = car.getCost() + 1500;
  }
}

class AlloyWheeledCar extends CarDecorator {
  constructor(car) {
    super(car);
    this.description = car.getDescription() + ", Alloy Wheeled";
    this.cost = car.getCost() + 500;
  }
}

// 使用装饰器模式
let myCar = new Car();
console.log(myCar.getDescription()); // 输出 Unknown Car
console.log(myCar.getCost()); // 输出 0

myCar = new AirConditionedCar(myCar);
console.log(myCar.getDescription()); // 输出 Unknown Car, Air Conditioned
console.log(myCar.getCost()); // 输出 1500

myCar = new AlloyWheeledCar(myCar);
console.log(myCar.getDescription()); // 输出 Unknown Car, Air Conditioned, Alloy Wheeled
console.log(myCar.getCost()); // 输出 2000
