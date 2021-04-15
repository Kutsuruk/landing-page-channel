class Calculator {
    constructor(firstNum, secondNum) {
        this.firstNum = firstNum
        this.secondNum = secondNum
    }

    add() {
        return this.firstNum + this.secondNum
    }

    minus() {
        return this.firstNum - this.secondNum
    }

    multiply() {
        return this.firstNum * this.secondNum
    }

    divide() {
        return this.firstNum / this.secondNum
    }

    percent(number, per) {
        const PERCENT = 100
        this.firstNum = number

        return (number / PERCENT) * per
    }
}

let calculator = new Calculator(30, 10)
console.group('Class calculator')
console.log(`Sum: ${calculator.add()}`)
console.log(`Difference: ${calculator.minus()}`)
console.log(`Product: ${calculator.multiply()}`)
console.log(`Division: ${calculator.divide()}`)
console.log(`Percentage: ${calculator.percent(100, 10)}`)
console.groupEnd()



