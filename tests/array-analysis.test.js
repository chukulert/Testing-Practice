const arrAnalysis = require('../codes/array-analysis')

test ('properly returns array analysis as object', () => {
    expect(arrAnalysis([1,2,3])).toEqual({
        average: 2,
        max: 3,
        min: 1,
        length: 3
    })
})