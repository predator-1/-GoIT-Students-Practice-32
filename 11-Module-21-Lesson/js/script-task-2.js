/**
 * How many days between "06/30/2019" and "04/23/2020"
 */
import { getDays } from './script-task-1.js';

const date1 = new Date("06/30/2019");
const date2 = new Date("04/23/2020");

const newDate = date2.getTime() - date1.getTime();

console.log(getDays(newDate));
