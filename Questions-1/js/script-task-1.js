// Замыкания
// Напишите функцию для хранения скидки.
// Функция возвращает другую функцию,
// которая принимает сумму покупки
// и возвращает финальную сумму с сохранённой скидкой.

const applyDiscount = discount => {
  return price => {
    return price - (price * discount) / 100;
  };
};

const withSilverDiscount = applyDiscount(10);

console.log(withSilverDiscount(100));
console.log(withSilverDiscount(300));

const withGoldDiscount = applyDiscount(20);

console.log(withGoldDiscount(100));
