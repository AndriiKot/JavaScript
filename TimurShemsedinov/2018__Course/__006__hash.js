'use strict';

const welcome = ({ name }) => {
  console.log(`Ave, ${name}!`);
};

const persons = {
  marcus: { name: 'Marcus Aurelius' },
  mao: { name: 'Mao Zedong' },
  rene: { name: 'Rene Descartes' },
};

for (const key in persons) {
  const value = persons[key];
  welcome(person);
}
