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


const testAdder3 = new Adder(5);

testAdder3.add(2).add(3).add(4);

console.dir({ testAdder1, testAdder2, testAdder3 });

/*
{
  testAdder1: { value: 14, steps: [ 5, 2, 3, 4 ], add: [Function: add] },
  testAdder2: { value: 14, steps: [ 5, 2, 3, 4 ], add: [Function: add] },
  testAdder3: Adder { value: 14, steps: [ 5, 2, 3, 4 ] }
}
*/

