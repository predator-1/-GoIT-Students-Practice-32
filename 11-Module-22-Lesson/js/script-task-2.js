/**
 * Create promise chain
 * Each promise have return square of previous
 */

const getNewPromise = n => {
    return new Promise(resolve => setTimeout(() => resolve(n*n), 1000))
}

Promise.resolve(3)
    .then(getNewPromise)
    .then(getNewPromise)
    .then(getNewPromise)
    .then(value => `this is ${value}`)
    .then(console.log);

console.log('promise created');