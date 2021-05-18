/**
 * Merge two list in one
 * without dublicates
 */

const lis = document.querySelectorAll('li');

const merged = document.createElement('ol');


const lisFiltered = 
    [...lis].filter(
        (value, index, array) => 
        array.findIndex(
            (findIndexValue) => findIndexValue.firstElementChild.getAttribute('src') === value.firstElementChild.getAttribute('src')
        ) === index);

lisFiltered.forEach(el => merged.appendChild(el));

document.body.innerHTML = '';
document.body.appendChild(merged);