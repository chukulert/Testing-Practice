const arrAnalysis = (arr)=>{
    const object = {
        average: arr.reduce((acc, cur)=> acc + cur, 0) / arr.length,
        max: Math.max(...arr),
        min: Math.min(...arr),
        length: arr.length
    }
    return object;
}

module.exports = arrAnalysis