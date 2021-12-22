export const calculate = (firstNumber = 0) => {
    const bigFirstNumber = BigInt(firstNumber)
    return {
        add: (secondNumber) => {
            const bigSecondNumber = BigInt(secondNumber)
            return bigFirstNumber + bigSecondNumber
        },
        power: (exponent) => {
            const bigExponent = BigInt(exponent)
            return bigFirstNumber ** bigExponent
        },
        multiplyBy: (secondNumber) => {
            const bigSecondNumber = BigInt(secondNumber)
            return bigFirstNumber * bigSecondNumber
        },
        divideBy: (secondNumber) => {
            const bigSecondNumber = BigInt(secondNumber)
            return bigFirstNumber / bigSecondNumber
        },
        mod: (secondNumber) => {
            const bigSecondNumber = BigInt(secondNumber)
            return bigFirstNumber % bigSecondNumber
        }
    }    
}



