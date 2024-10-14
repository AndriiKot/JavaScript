"use strict";

const fnInterval = () => 500;
const fnMaxValue = () => 10;
let counter = 0;
let timer = null;

const event = () => {
  if (counter === fnMaxValue()) {
    console.log("The end");
    clearInterval(timer);
    return;
  }
  console.dir({ counter, date: new Date() });
  counter++;
};

console.log("Begin");
timer = setInterval(event, fnInterval());
