const isMultple = (num) => {
    if(num % 3 == 0 || num % 5 == 0) { // Then is a factor of 3 or 5
        return true
    } else {
        return false
    }
}

const answer = (maxNum) => {
    let sum = 0;
    for(let i = 0; i < 1000; i++) {
        if(isMultple(i)) {
            sum += i
        }
    }
    return sum;
}

module.exports = {
    isMultple,
    answer
}