const fractionSimplify = (frac) => {
    let complete = false;
    let i = 1;
    while(!complete) {
        if(i == frac[1]) {
            complete = true;
        } else if(frac[0] % i == 0 && frac[1] % i == 0) {
            frac[0] /= i;
            frac[1] /= i;
            i = 1;
        }
        i++;
    }

    return frac
}

// Fraction addition required as small errors made using js and small numbers
const fractionAddition = (firstFrac, secondFrac) => { // frac = [numerator, denominator]
    let firstNumerator = firstFrac[0];
    let secondNumerator = secondFrac[0];
    firstNumerator *= secondFrac[1];
    secondNumerator *= firstFrac[1];
    return [firstNumerator + secondNumerator, firstFrac[1] * secondFrac[1]];
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

const getConvergent = (start, list, index) => { // Gets the convergent decimal at provided index
    list = list.slice(0, index - 1).reverse();
    let conv = [1, list[0]];

    for(let i = 1; i < index - 1; i++) {
        conv = fractionAddition([list[i], 1], conv);
        conv = conv.reverse();
    }
    conv = fractionAddition([start, 1], conv);
    return (conv);
}

const solution = (index) => {
    const numerator = getConvergent(2, e_inline(index), index)[0].toString();
    console.log(numerator);
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

