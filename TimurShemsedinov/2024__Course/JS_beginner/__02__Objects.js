"use strict";

const values = {
  name: "Mouse",                      // stirng
  price: 23,                          // number
  stock: false,                       // boolean
  reference: null,                    // null
  primitive: undefined,               // undefined
  numbers: [NaN, Infinity],           // object
  avg: (a, b) => (a + b) / 2n,        // function
  bigInt: 2n,                         // bigint
}

for (const key in values) {
  console.log(typeof values[key])
}

console.log({ values })

