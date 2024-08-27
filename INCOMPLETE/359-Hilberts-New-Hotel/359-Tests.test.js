/*
const {
    P,
    isPerfectSquare,
    initRooms
} = require('./359-Hilberts-New-Hotel');

test("isPerfectSquare works", () => {
    expect(isPerfectSquare(49)).toBe(true);
    expect(isPerfectSquare(120)).toBe(false);
});

test("Room initialisation works as expected", () => {
    expect(initRooms(100).length).toBe(100); // Ensure that the correct number of floors initialised
    expect(initRooms(10)[0].length).toBe(0); // Enusre that the first floor is empty
});
*/

const { pushPop } = require('./359-Hilberts-New-Hotel');
test("Expect [-1] to give the end of an array", () => {
    let array = [1,2,3,4,5,6,7,8];
    expect(pushPop(array)).toBe(8);
    expect(array).toEqual([1,2,3,4,5,6,7,8])
})