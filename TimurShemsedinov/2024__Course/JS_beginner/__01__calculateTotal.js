"use strict";

const calculateTotal = (prices) => {
  let amount = 0;
  if (!Array.isArray(prices)) throw new Error(`Array expected`);
  for (const price of prices) {
    amount += price;
  }
  return amount;
};

console.log(calculateTotal([1, 2, 3]));
console.log(calculateTotal(1, 2, 3));
