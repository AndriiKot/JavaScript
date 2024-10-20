"use strict";

const capitalize = (str) =>
  str.trim()[0].toUpperCase() + str.trim().slice(1).toLowerCase();

function welcome({ name }, fn = capitalize) {
  console.log(`Ave ${fn(name)}!`);
}

welcome({ name: "  AnDrii " });
