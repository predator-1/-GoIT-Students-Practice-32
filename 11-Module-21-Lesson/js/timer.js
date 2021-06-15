import { getDays, getHours, getMins, getSeconds} from './script-task-1.js';

const template = value => `
<div class="timer">
<span class="value">${value}</span>
</div>
`;

const newYearDate = new Date('01/01/2022').getTime();

export default function Timer({selector}) {
    let id = 0;
    document.querySelector(selector)
        .insertAdjacentHTML('beforeend', template('0:0:0:0'));

    const valueRef = document.querySelector(`${selector} .value`);

    const updateValue = (value) => {
        valueRef.textContent = value;
    }

    this.start = () => {
        if(id) {
            return;
        }
        id = setInterval(() => {
            const diff = newYearDate - Date.now();
            const days = getDays(diff);
            const hours = getHours(diff);
            const mins = getMins(diff);
            const seconds = getSeconds(diff);
            updateValue(`${days} days ${hours} hours ${mins} mins ${seconds} seconds`);
        }, 100);
    };

    this.stop = () => {
        clearTimeout(id);
        id = 0;
    }
}