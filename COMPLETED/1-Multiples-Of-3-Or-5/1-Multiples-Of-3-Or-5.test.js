const { 
    isMultple, 
    answer 
} = require("./1-Multiples-Of-3-Or-5")


test("isMultiple works", () => {
    expect(isMultple(9)).toEqual(true);
    expect(isMultple(55)).toEqual(true);
    expect(isMultple(23)).toEqual(false);
})

console.log("ANSWER -- ")
console.log(answer(1000));