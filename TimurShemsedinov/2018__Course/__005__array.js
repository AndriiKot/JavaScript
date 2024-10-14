"use strict";

const welcome = ({ name }) => {
  console.log(`Ave, ${name}!`);
};

const persons = [
  { name: "Marcus Aurelius" },
  { name: "Mao Zedong" },
  { name: "Rene Descartes" },
];

for (const person of persons) {
  welcome(person);
}
