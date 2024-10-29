"use strict";

// Functions

// Function definition
{
  function sum(a, b) {
    return a + b;
  }
}

// Arrow function expression
{
  const sum = (a, b) => a + b;
}

// Function expression
{
  const sum = function (a, b) {
    return a + b;
  };
}

{
  const sum = (a, b) => a + b;

  console.log(sum(1, 2)); // 3
  console.log(sum(1)); // NaN
  console.log(sum()); // NaN
}
// Default parameters
{
  const sum = (a = 0, b = 0) => a + b;

  console.log(sum(1, 2)); // 3
  console.log(sum(1)); // 1
  console.log(sum()); // 0
}

// Rest parameters
{
  function sum(...args) {
    return args.reduce((acc, val) => acc + val, 0);
  }

  console.log(sum(1, 2, 3, 4, 5)); // 15
}

{
  const sum = (...args) => args[0] + args[1];

  console.log(sum(1, 2, 3, 4, 5)); // 3
}

{
    const sum = (a, ...args) => a + args[0];

    console.log(sum(1, 2, 3, 4, 5)); // 3
}
		