/* 
Attempted 3 / 4 of question and got the the core theory correct however was completely
unoptimised so the algorithm would take months to compute due to the inefficient ime complexity

SOLUTION - https://euler.stephan-brumme.com/359/
*/

const num = 71328803586048;

const pushPop = (arr) => {
    let end = arr.pop();
    arr.push(end);
    return end;
}

const isPerfectSquare = (n) => { // Determines wether a number is a perfect square or not
    const sqrt_n = Math.sqrt(n);
    return Number.isInteger(sqrt_n);
}

const initRooms = (floors) => {
    let rooms = [];
    for(let i = 0; i < floors; i++) {
        rooms.push([]);
    }
    return rooms
}


const P = (f, r) => { // The main function specified in the problem where P(f, r) = n (occupant of that room)
    let rooms = initRooms(f);
    let reached = false; // once the room is occupied reached = true
    
    let person = 1;
    
    while(!reached) { // whilst room is not occupied
        let done = false;
        let floorAt = 0;
        while(!done) {
            try {
                rooms[floorAt].length; // See if out of floors
            } catch {
                rooms.push([]); // Add floor
            }
            if(rooms[floorAt].length == 0) {
                rooms[floorAt].push(person);
                done = true;
            } else if(isPerfectSquare(pushPop(rooms[floorAt]) + person)) { // Perfect Square Rule -- TEST    
                rooms[floorAt].push(person);
                done = true;
            } // else continue iteration
            floorAt++;
        }
        try {
            if(rooms[f-1][r-1]) {
                reached = true;
                console.log(rooms[f-1][r-1]);
            }
        } catch {}
        console.log(person, floorAt)
        person++;

        
    }
}



module.exports = {
    P, 
    isPerfectSquare,
    initRooms,
    pushPop
}


// The prime factor decomposition of num is 2^27 * 3^12
// Iterating through each combination 2^i * 3^j where 0 <= i <= 27 and 0 <= j <= 12 will give every possible factor of num
// Theory for last part from: https://euler.stephan-brumme.com/359/
const findDivPairs = () => {
    const pairs = [];
    for(let i = 0; i <= 27; i++) {
        for(let j = 0; j <= 12; j++) {
            pairs.push(2**i * 3**j);
        }
    }
    // pair1[n] * pair2[n] = num
    pair1 = pairs.slice(0, (pairs.length / 2));
    pair2 = pairs.slice((pairs.length / 2), pairs.length).reverse();

    return [pair1, pair2];
}

const solution = () => {
    const divPairs = findDivPairs();
    const pair1 = divPairs[0];
    const pair2 = divPairs[1];

    let sum = 0

    for(let i = 26; i < pair1.length; i++) {
        console.log(i);
        sum += P(pair1[i], pair2[i]);
        sum += P(pair2[i], pair1[i]);
    }

    console.log(sum)
}

solution();