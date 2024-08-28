const {
    pushPop,
    fact,
    nextDigitFactorial,
    isRepeating,
    solution
} = require("./74-Digit-Factorial-Chains");

test("pushPop works correctly", () => {
    const array = [1, 2, 3, 4, 5, 6];
    expect(pushPop(array)).toEqual(6);
    expect(array).toEqual([1, 2, 3, 4, 5, 6]);
});

test("Factorial Function is working", () => {
    expect(fact(5)).toEqual(120);
    expect(fact(1)).toEqual(1);
    expect(fact(9)).toEqual(362880);
});

test("nextDigitFactorial works correctly", () => {
    expect(nextDigitFactorial(145)).toEqual(145);
    expect(nextDigitFactorial(169)).toEqual(363601);
});

test("isRepeating works correctly", () => {
    expect(isRepeating(169)).toEqual([true, 3]);
    expect(isRepeating(69)).toEqual([false, 5]);
});

console.log("ANSWER --");
console.log(solution(1000000)); // 18.389s runtime