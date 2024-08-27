const fractionSimplify = (frac) => { // Simplifies Fractions in form [numerator, denominator] 
    let complete = false; // Not used due to inefficient time complexity
    let i = 1;
    while(!complete) {
        if(i == frac[1]) {
            complete = true;
        } else if(BigInt(frac[0]) % BigInt(i) == 0 && BigInt(frac[1]) % BigInt(i) == 0) {
            frac[0] = BigInt(frac[0]) / BigInt(i);
            frac[1] = BigInt(frac[1]) / BigInt(i);
            i = 1;
        }
        i++;
    }

    return frac
}

// Fraction addition required as small errors made using js and small numbers
const fractionAddition = (firstFrac, secondFrac) => { // frac = [numerator, denominator]
    let firstNumerator = BigInt(firstFrac[0]);
    let secondNumerator = BigInt(secondFrac[0]);
    firstNumerator *= BigInt(secondFrac[1]);
    secondNumerator *= BigInt(firstFrac[1]);
    return [firstNumerator + secondNumerator, BigInt(firstFrac[1]) * BigInt(secondFrac[1])];
}   

const e_inline = (length) => { // Gives inline fraction specific to e
    let arr = [];
    let counter = 2;
    for(let i = 0; i < length + 2; i++) {
        if(i == 0 || i == 1) {} 
        else if(i % 3 == 0) {
            arr.push(counter);
            counter += 2;
        } else {
            arr.push(1);
        }
    }
    return arr;
}

const getConvergent = (start, list, index) => { // Gets the convergent fraction at provided index
    list = list.slice(0, index - 1).reverse();
    let conv = [BigInt(1), BigInt(list[0])];

    for(let i = 1; i < index - 1; i++) {
        conv = fractionAddition([BigInt(list[i]), BigInt(1)], conv);
        conv = conv.reverse();
    }
    conv = fractionAddition([start, 1], conv);
    return (conv);
}

const solution = (index) => { // Adding numerator values
    const numerator = getConvergent(2, e_inline(index), index)[0].toString();
    let sum = 0;
    for(let i = 0; i < numerator.length; i++) {
        sum += parseInt(numerator[i]);
    }
    return sum;
}

module.exports = {
    getConvergent,
    fractionAddition,
    fractionSimplify,
    e_inline,
    solution
}
