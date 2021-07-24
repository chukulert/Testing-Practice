// import capitalize from '/codes/capitalize';
const capitalize = require('../codes/capitalize')

test('properly capitalize a string', () => {
    expect (capitalize('abc')).toBe('Abc')
})

test('properly capitalize a string', () => {
    expect (capitalize('abc abC')).toBe('Abc abC')
})