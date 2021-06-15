/**
 * You have current UTC. Write func for getting
 * 1. Days
 * 2. Hours
 * 3. Mins
 * 4. Seconds
 */

// const date1 = new Date('01/01/2022');
// console.log(date1);
// const date2 = Date.now();
// console.log(date2);
// const date = date1.getTime() - date2;

// console.log(date);

export const getDays = time => Math.floor(time / 1000 / 60 / 60 / 24);

// console.log(getDays(date));

export const getHours = time => Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60 ));

// console.log(getHours(date));

export const getMins = time =>  Math.floor((time % (1000 * 60 * 60)) / (1000 * 60 ));

// console.log(getMins(date));

export const getSeconds = time =>  Math.floor((time % (1000 * 60)) / 1000); 

// console.log(getSeconds(date));