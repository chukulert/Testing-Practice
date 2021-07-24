const reverseString = require('../codes/reverseString')

test ('properly reverses a string1', () => {
    expect (reverseString('abc')).toBe('cba')
})

test ('properly reverses a string2', () => {
    expect (reverseString('AbC')).toBe('CbA')
})

test ('properly reverses a string3', () => {
    expect (reverseString('AbC abc')).toBe('cba CbA')
})