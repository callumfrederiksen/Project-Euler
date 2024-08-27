const { 
    getConvergent,
    fractionAddition,
    fractionSimplify,
    e_inline,
    solution
} = require("./65-Convergents-Of-e");


test("Algorithm Works", () => {
    expect(getConvergent(2, e_inline(10), 10)).toEqual([BigInt(1457), BigInt(536)]);
});


test("Fraction Addition Works", () => {
    expect(fractionAddition([1, 2], [3, 8])).toEqual([BigInt(14), BigInt(16)]);
});

test("Fraction Simplifiction Works", () => {
    expect(fractionSimplify([90, 180])).toEqual([BigInt(1), BigInt(2)]);
    expect(fractionSimplify(fractionAddition([1, 2], [3, 8]))).toEqual([BigInt(7), BigInt(8)]);
})


test("Test example works", () => {
    expect(solution(10)).toEqual(17);
})

console.log("ANSWER -- ");
console.log(solution(100));