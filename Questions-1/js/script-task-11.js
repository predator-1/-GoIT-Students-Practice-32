/**
 * Напиши функцию getAllPropValues(propName)
 * которая вернет все значения заданного
 * свойства
 * Например getAllPropValues('name') возвращает ['Asus', 'Huawei', 'HP', 'Dell']
 * getAllPropValues('category') возвращает []
 */

const products = [
  { name: 'Asus', price: 1300, quantity: 4 },
  { name: 'Huawei', price: 2700, quantity: 3 },
  { name: 'HP', price: 400, quantity: 7 },
  { name: 'Dell', price: 1200, quantity: 0 },
  { name: 'Apple', price: 1200 },
];

// const getAllPropValues = (propname, array) => {
//   return array.map(obj => obj[propname]).filter(val => val != undefined);
// };

const getAllPropValues = (propname, array) => {
  // 0(n)
  return array.reduce((acc, obj) => {
    // if (obj.hasOwnProperty(propname)) {
    // if (Object.keys(obj).includes(propname)) {
    if (propname in obj) {
      acc.push(obj[propname]);
    }
    return acc;
  }, []);
};

console.log(getAllPropValues('quantity', products));
