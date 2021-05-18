/**
 * We have a list of elements on html page
 * 1. Print a text content of elements
 * 2. Add element 'Coke'
 * 2. Color text in list in red
 */

const elements = document.querySelectorAll('li');
elements.forEach(el => console.log(el.textContent));

//elements[elements.length - 1].insertAdjacentHTML('afterend', '<li>Coke</li>');

const li = document.createElement('li');

elements[0].parentNode.appendChild(li);
li.appendChild(document.createTextNode('Coke'));

document.querySelectorAll('li').forEach(el => {
    el.style.color = 'Red';
});
