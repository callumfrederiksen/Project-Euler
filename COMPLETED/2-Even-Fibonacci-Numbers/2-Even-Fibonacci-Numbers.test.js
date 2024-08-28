const { 
    pushPop,
    computeFibonacci,
    solution
} = require("./2-Even-Fibonacci-Numbers");

test("PushPop works", () => {
    expect(pushPop([1, 2, 3, 4, 5, 6], 2)).toEqual([5, 6]);
    expect(pushPop([1, 2, 3, 4, 5], 3)).toEqual([3, 4, 5]);

    let array = [1, 2, 3, 4, 5];
    pushPop(array, 4);
    expect(array).toEqual([1, 2, 3, 4, 5]);
});

test("computeFibonacci", () => {
    expect(computeFibonacci(89)).toEqual([1, 2, 3, 5, 8, 13, 21, 34, 55]);
});

console.log("ANSWER --");
console.log(solution(4000000));