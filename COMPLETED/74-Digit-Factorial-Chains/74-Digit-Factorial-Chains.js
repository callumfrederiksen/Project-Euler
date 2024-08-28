const pushPop = (arr) => { // Access final item in array without removing with .pop()
    let popped = arr.pop();
    arr.push(popped);
    return popped
}

const fact = (num) => { // Returns the factorial of a given number
    let result = 1;
    for(let i = 1; i <= num; i++) {
        result *= i;
    }
    return result
}

const nextDigitFactorial = (num) => { // Returns the next digit in the chain
    const digits = num.toString().split("");
    let sum = 0;
    for(let i = 0; i < digits.length; i++) {
        sum += fact(parseInt(digits[i]));
    }
    return sum;
}

const isRepeating = (num) => { // Returns if an array is repeting or not, [if array is repeating, if not then length of chain]
    let loop = [num];
    let hasRepeated = false;
    let next = 0;
    let result = [false, 0]; // Placeholder values
    
    while(!hasRepeated) { // Will always end
        next = nextDigitFactorial(pushPop(loop));
        if(loop[0] == next) { // Closed loop
            hasRepeated = true;
            result = [true, loop.length]
        } else if(loop.includes(next)) { // Open loop
            hasRepeated = true;
            result = [false, loop.length];
        }
        loop.push(next);
    }

    return result
}

const solution = (maxNum) => { // Solution
    let sum = 0;
    let e = [false, 0]; // Placeholder
    for(let i = 0; i < maxNum; i++) {
        e = isRepeating(i);
        if(e[1] == 60) {
            sum += 1
        }
    }
    return sum;
}

module.exports = {
    pushPop,
    fact,
    nextDigitFactorial,
    isRepeating,
    solution
}

