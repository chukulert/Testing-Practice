const caesorCipher = require('../codes/caesar-cipher')


test ('properly encrpyts a text by shiftValue (0)', () => {
    expect (caesorCipher('hi', 0)).toBe('hi')
})

test ('properly encrpyts a text by shiftValue (1)', () => {
    expect (caesorCipher('hi', 1)).toBe('ij')
})

test ('properly encrpyts a sentence by shiftValue(2)', () => {
    expect (caesorCipher('hey u!', 2)).toBe('jga w!')
})