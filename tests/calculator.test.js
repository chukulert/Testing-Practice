const calculator = require('../codes/calculator')

test('properly adds 2 numbers', () => {
    expect (calculator.add(1 , 2)).toBe(3)
})

test('properly subtracts 2 numbers', () => {
    expect (calculator.subtract(3 , 2)).toBe(1)
})

test('properly multiplies 2 numbers', () => {
    expect (calculator.multiply(3 , 2)).toBe(6)
})

test('properly divides 2 numbers', () => {
    expect (calculator.divide(10 ,5)).toBe(2)
})
