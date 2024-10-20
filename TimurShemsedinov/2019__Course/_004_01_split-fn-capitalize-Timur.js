"use strict";

const capitalize = (str) =>
  str.trim()[0].toUpperCase() + str.trim().slice(1).toLowerCase();

function welcome({ name }) {
  console.log(`Ave ${capitalize(name)}!`);
}

welcome({ name: "  AnDrii " });
