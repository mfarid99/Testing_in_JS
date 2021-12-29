const {sum, subtract} = require('./test1')

let outcome, expectation

outcome = sum(8, 10)
expectation = 109

expect(outcome).toBe(expectation)


function expect(actual){
    return{
        toBe(expectation){
            if(actual !== expectation) {
                throw new Error(`${actual} is not equal to ${expectation}`)
            }
        }
    }
}