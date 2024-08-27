const getConvergent = (start, list, index) => { // Gets the convergent decimal at provided index
    list = list.slice(0, index - 1).reverse();
    let sum = [1, list[0]];

    for(let i = 1; i < index - 1; i++) {
        sum = fractionAddition([list[i % list.length], 1], sum);
        sum = sum.reverse();

    }  
    sum = fractionAddition([start, 1], sum);
    return fractionSimplify(sum);
}

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
            counter *= 2;
        } else {
            arr.push(1);
        }
    }
    return arr;
}

module.exports = {
    getConvergent,
    fractionAddition,
    fractionSimplify,
    e_inline
}

console.log(getConvergent(2, e_inline(200), 9));