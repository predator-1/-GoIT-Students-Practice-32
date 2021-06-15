/**
 * Create timer how many days:hours:minutes:seconds left to some date
 */

import TemplateTimer from './timer.js';


const timer = new TemplateTimer({selector: '#timer'});

document.getElementById('start')
    .addEventListener('click',
    () => timer.start());
document
    .getElementById('stop').addEventListener('click',
    () => timer.stop());
