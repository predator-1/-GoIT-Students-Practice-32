/**
 * Create heads and tails (with edge state) 
 * game with promise and setTimeout
 */

import { getRandomArbitrary} from './script-task-1.js';

const array = ['heads', 'tails', 'edge'];

const getRandomPromise = () => {
    return new Promise(resolve => {
        const rndValue = getRandomArbitrary(0, array.length);
        setTimeout(resolve, 1000, array[rndValue]);
    })
};

getRandomPromise().then(console.log);

// const runCallback = (callback, ...arg) => {
//     callback(...arg);
// }