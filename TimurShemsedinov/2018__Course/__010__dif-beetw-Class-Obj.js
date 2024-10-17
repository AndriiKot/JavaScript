"use strict";

const Adder = class {
  constructor(initial = 0) {
    this.value = initial;
    this.steps = [initial]
  }
  add(value) {
    this.steps.push(value);
    this.value += value;
    return this;
  }
}

const adder = (initial = 0) => ({
  value: initial,
  steps: [initial],
  add(value) {
    this.value += value;
    this.steps.push(value);
    return this;
  },
});


const testAdder1 = adder(5);
const testAdder2 = new Adder(5);

testAdder1.add(2).add(3).add(4);
testAdder2.add(2).add(3).add(4);

console.dir({ testAdder1, testAdder2 });

/*
{
  testAdder1: Adder { value: 14, steps: [ 5, 2, 3, 4 ] }
  testAdder2: { value: 14, steps: [ 5, 2, 3, 4 ], add: [Function: add] },
}
*/

