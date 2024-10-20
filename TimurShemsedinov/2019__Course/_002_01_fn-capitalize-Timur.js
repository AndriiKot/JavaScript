"use strict";

function welcome(person) {
  const name = person.name.trim();
  const firstChr = name[0].toUpperCase();
  const restChr = name.slice(1).toLowerCase();
  const capitalized = firstChr + restChr;
  console.log(`Ave ${capitalized}!`);
}

welcome({ name: "  Andrii " });
