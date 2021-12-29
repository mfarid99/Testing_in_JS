const sum = (a, b) => {
    return a + b
}

// console.log(sum(5, 4))

const subtract = (a, b) => {
    return a - b
}

// console.log('subtract = ', subtract(90, 10))

let result = sum(90, 10)
// console.log('result = ', result)
let expected = 100

if(result !== expected){
    throw new Error(`${result} is not equal to ${expected}`)
}

module.exports = {sum, subtract}