/**
 * Merge two list in one
 * without dublicates
 */

// Решить задачу за list1.length + list2.length O(n+k) итераций;
// Сейчас работает за list1.length*list2.length O(n*k)

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
