/**
 *
 *
 *
 */
const elements = ['1', 2, 3];

for (const el of elements) {
  console.log(el);
}

const result = elements.forEach(el => console.log(el));

console.log('result', result);
