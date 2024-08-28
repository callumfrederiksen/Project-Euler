const pushPop = (array, endfrom) => { // Gives the last x (endfrom) numbers from an array
    let end = [];
    let popped = 0;
    for(let i = 0; i < endfrom; i++) {
        popped = array.pop();
        end.push(popped);
    }
    end = end.reverse();
    for(let i = 0; i < end.length; i++) {
        array.push(end[i])
    }
    return end;
}

const computeFibonacci = (end) => {
    let fib = [1, 2];
    let last2 = [0, 0];
    let toPush = fib[0] + fib[1];
    while(toPush < end) {
        fib.push(toPush);
        last2 = pushPop(fib, 2); // Gets the last 2 items from array
        toPush = last2[0] + last2[1];
    }
    return fib;
}
const solution = (end) => {
    const list = computeFibonacci(end);
    let sum = 0;
    for(let i = 0; i < list.length; i++) {
        if(list[i] % 2 == 0) {
            sum += list[i]
        }
    }
    return sum;
}

module.exports = {
    pushPop,
    computeFibonacci,
    solution
}
