"use strict";

const welcome = ({ name }) => {
  console.log(`Ave, ${name}!`);
};

const marcus = { name: "Marcus Aurelius" };
const mao = { name: "Mao Zedong" };
const cartesius = { name: "Rene Descartes" };

welcome(marcus);
welcome(mao);
welcome(cartesius);
