//
// 策略模式
//

// 定义一个策略接口
class Strategy {
  calculate(num1, num2) {
    throw new Error("This method must be implemented");
  }
}

// 定义具体的策略类
class AddStrategy extends Strategy {
  calculate(num1, num2) {
    return num1 + num2;
  }
}

class SubstractStrategy extends Strategy {
  calculate(num1, num2) {
    return num1 - num2;
  }
}

class MultiplyStrategy extends Strategy {
  calculate(num1, num2) {
    return num1 * num2;
  }
}

// 定义一个上下文类
class Calculator {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  calculate(num1, num2) {
    return this.strategy.calculate(num1, num2);
  }
}

// 使用策略模式
const calculator = new Calculator(new AddStrategy());
console.log(calculator.calculate(5, 2)); // 输出 7

calculator.setStrategy(new SubstractStrategy());
console.log(calculator.calculate(5, 2)); // 输出 3

calculator.setStrategy(new MultiplyStrategy());
console.log(calculator.calculate(5, 2)); // 输出 10
