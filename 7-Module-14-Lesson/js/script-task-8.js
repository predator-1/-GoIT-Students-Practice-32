/**
 * Merge two list in one
 * without dublicates
 */

// Решить задачу за list1.length + list2.length O(n+k) итераций;
// Сейчас работает за list1.length*list2.length O((n+k)^2)

const [list1, list2] = document.querySelectorAll('ol');

const uniquelist = new Set(); // O(1)
list1.querySelectorAll('li').forEach(el => {
  uniquelist.add(el.firstElementChild.getAttribute('src'));
});

list2.querySelectorAll('li').forEach(el => {
  if (!uniquelist.has(el.firstElementChild.getAttribute('src'))) {
    list1.appendChild(el.cloneNode(true));
  }
});

document.body.innerHTML = '';
document.body.appendChild(list1);

/**
 * 
const lisFiltered = 
    [...lis].filter(
        (value, index, array) => 
        array.findIndex(
            (findIndexValue) => findIndexValue.firstElementChild.getAttribute('src') === value.firstElementChild.getAttribute('src')
        ) === index);

lisFiltered.forEach(el => merged.appendChild(el));
 */
