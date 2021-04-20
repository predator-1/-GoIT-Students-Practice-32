const func = input => {
  input *= 0.1;
  if (input > 2000000000) {
    return input;
  }
  return func(input);
};

console.log(func(1));
