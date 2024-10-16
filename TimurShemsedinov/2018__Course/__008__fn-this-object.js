"use strict";

const adder1 = (initial = 0) => ({
  value: initial,
  steps: [initial],
  add(value) {
    this.value += value;
    this.steps.push(value);
  },
});

const adder2 = (initial = 0) => ({
  value: initial,
  steps: [initial],
  add(value) {
    this.steps.push(value);
    this.value += value;
    return this;
  },
});

const testAdder1 = adder1(5);
const testAdder2 = adder2(5);

testAdder1.add(2);
testAdder1.add(3);
testAdder1.add(4);

testAdder2.add(2).add(3).add(4);

console.dir({ testAdder1, testAdder2 });

/*
{
    testAdder1: { value: 14, steps: [ 5, 2, 3, 4 ], add: [Function: add] },
    testAdder2: { value: 14, steps: [ 5, 2, 3, 4 ], add: [Function: add] }
}
*/

// Хотя adder1 и adder2 имеют различия в реализации
// (например, adder2 поддерживает метод цепочкой),
// их конечный результат почти идентичен
// при соответствующем использовании.
