"use strict";

const capitalize = (str) => {
  str = str.trim();
  const firstChr = str[0].toUpperCase();
  const restChr = str.slice(1).toLowerCase();
  return firstChr + restChr;
};

function welcome({ name }) {
  console.log(`Ave ${capitalize(name)}!`);
}

welcome({ name: "  Andrii " });
