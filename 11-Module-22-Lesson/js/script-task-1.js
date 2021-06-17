/**
 * Create promise that will be resolved in [0, 5) seconds
 * and rejected in [5, 10) seconds. Catch success and error
 */
// https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range

export function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// const promiseFunc = new Promise((resolve, reject) => {
//     const randomNumber = getRandomArbitrary(0, 4);
//     setTimeout(() => randomNumber < 2
//         ? resolve(randomNumber)
//         : reject(randomNumber)
//     , randomNumber * 1000);
// });

// promiseFunc.then(
//     success => console.log('success', success),
//     // error => console.log('error', error)
// ).catch(error2 => console.log('error2', error2));