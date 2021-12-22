import { calculate } from "./calculateBigNums.js";

export const ferma = (a, p) => {
    const bigA = BigInt(a)
    const bigP = BigInt(p)

    if(calculate(a).mod(p) == 0) {
        throw new Error("a cannot be divisible by p")
    }

    const calculatedPower = powerWithMod(bigA, calculate(p).add(-1), bigP)
    console.log(`Calculated power = ${calculatedPower}`)

    return calculatedPower
}

function powerWithMod(x, y, mod){
    const big1 = BigInt(1)
    let res = big1
 
    x = calculate(x).mod(mod);
 
    if (x == BigInt(0))
        return BigInt(0);
 
    while (y > BigInt(0)) {
        if (y & big1) {
            const calculateRes1 = calculate(res).multiplyBy(x)
            res = calculate(calculateRes1).mod(mod);
        }
        y = y >> big1;
        const xSquared = calculate(x).multiplyBy(x)
        x = calculate(xSquared).mod(mod);
    }
    return res;
}
 
