export const calculateSimple = (firstNumber = 0) => {
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

export const calculatePowerWithMod = (x, y, mod) => {
    const big1 = BigInt(1)
    let res = big1
 
    x = calculateSimple(x).mod(mod);
 
    if (x == BigInt(0))
        return BigInt(0);
 
    while (y > BigInt(0)) {
        if (y & big1) {
            const calculateRes1 = calculateSimple(res).multiplyBy(x)
            res = calculateSimple(calculateRes1).mod(mod);
        }
        y = y >> big1;
        const xSquared = calculateSimple(x).multiplyBy(x)
        x = calculateSimple(xSquared).mod(mod);
    }
    return res;
}


