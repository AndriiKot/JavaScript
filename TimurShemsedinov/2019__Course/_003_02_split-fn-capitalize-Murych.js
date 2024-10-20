"use strict";

const capitalize = (str) => {
  str = str.trim();
  if (str) {
    const firstChr = str[0].toUpperCase();
    const restChr = str.slice(1);
    const normalRestChr = restChr.toLowerCase();
    str = firstChr + normalRestChr;
  }
  return str;
};

function welcome({ name }) {
  console.log(`Ave ${capitalize(name)}!`);
}

welcome({ name: "  Andrii " });
