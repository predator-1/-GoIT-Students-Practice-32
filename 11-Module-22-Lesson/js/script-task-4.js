/**
 * Find the differences between all, allSettled, any, race
 */

const promise1 = new Promise((resolve, rejected) => {
    setTimeout(() => {
        resolve('hello');
    }, 100);
});

const promise2 = new Promise((resolve, rejected) => {
    setTimeout(() => {
        rejected('from');
    }, 500);
});

const promise3 = new Promise((resolve, rejected) => {
    setTimeout(() => {
        resolve('Promise');
    }, 1000);
});

// promise1.then(console.log);
// promise2.then(console.log);
// promise3.then(console.log);

// Promise.all([promise1, promise2, promise3])
// .then(console.log)
// .catch((e) => console.log('error', e));

// Promise.allSettled([promise1, promise2, promise3])
// .then(console.log)
// .catch((e) => console.log('error', e));

Promise.race([promise1, promise2, promise3])
.then(console.log)
.catch((e) => console.log('this is error', e));