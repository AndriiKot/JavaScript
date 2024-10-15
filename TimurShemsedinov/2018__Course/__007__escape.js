"use strict";

// Constants

const COLORS = [
  /* 0 */ "black",
  /* 1 */ "red",
  /* 2 */ "green",
  /* 3 */ "yellow",
  /* 4 */ "blue",
  /* 5 */ "magenta",
  /* 6 */ "cyan",
  /* 7 */ "white",
];

// Functions

const colorer = (s, color) => `\x1b[3${color}m${s}\x1b[0m`;

const colorize = (name, fn, len = COLORS.length) => {
  const letters = name.split("");
  const newLetters = Array.from({ length: letters.length }, () => "");
  let color = 0;
  letters.forEach((letter, index) => {
    newLetters[index] = fn(letter, color++);
    if (color > len) color = 0;
  });
  return newLetters.join("");
};

const greetings = (name, fnColorize = colorize, fnColor = colorer) =>
  name.includes("Augustus")
    ? `Ave, ${fnColorize(name, fnColor)}!`
    : `Hello, ${name}!`;

// Usage

const fullName = "Marcus Aurelius Antoninus Augustus";
console.log(greetings(fullName));

const shortName = "Marcus Aurelius";
console.log(greetings(shortName));
